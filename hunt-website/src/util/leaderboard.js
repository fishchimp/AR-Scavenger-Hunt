import { db } from '../firebase';
import { collection, query, getDocs, deleteDoc, doc, setDoc, getDoc, updateDoc} from 'firebase/firestore';

const leaderboardSize = 20;

async function clearLeaderboard() {
    console.log("Clearing the leaderboard")
    const   q = query(collection(db, "leaderboard"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
    });
}

async function removeFakePlayers() {
    console.log("Clearing the leaderboard")
    const   q = query(collection(db, "leaderboard"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        if (doc.id.includes("BOT")) deleteDoc(doc.ref);
    });
}

async function createFakePlayers(count) {
    console.log("Creating fake players")
    for (let i = 0; i < count; i++) {
        await setDoc(doc(db, "leaderboard", "BOT" + i.toString()), {
            uid: "BOT" + i.toString(),
            name:"BOT" + i.toString(),
            points: i * 100
        });
    }
}

async function getLeaderboard() {
    const q = query(collection(db, "leaderboard"));
    const querySnapshot = await getDocs(q);
    let leaderboard = [];
    querySnapshot.forEach((doc) => {
        leaderboard.push(doc.data());
    });
    return leaderboard;
}

async function addUserLeaderboard(userInfo, user) {
    if (userInfo.points <= 500)
        return;
    const snapdoc = await getDoc(doc(db, "leaderboard", userInfo.uid));
    if (snapdoc.exists()) {
        if (snapdoc.data().points !== userInfo.points) {
            await updateDoc(doc(db, "leaderboard", userInfo.uid), {
                points: userInfo.points
            });
        }
    } else {
        await setDoc(doc(db, "leaderboard", userInfo.uid), {
            uid: userInfo.uid,
            name: userInfo.name,
            points: userInfo.points,
            email: user.email
        });
    }
}

function getPosition(leaderboard, userInfo) {
    let pos = leaderboardSize + 1;
    let next = 0;
    for(let i = 0; i < leaderboard.length; i++) {
        if (userInfo.uid === leaderboard[i].uid) {
            pos = i + 1;
            if (i !== 0)
                next = leaderboard[i-1].points - userInfo.points;
        }
    }

    let status = "";
    if (pos === 1) status = "1st prize";
    else if (pos === 2) status = "2nd prize";
    else if (pos === 3) status = "3rd prize";
    else status = "NONE";

    return {pos:pos, next:next, status:status};
}





export { clearLeaderboard, createFakePlayers, removeFakePlayers, getLeaderboard, addUserLeaderboard, getPosition}

