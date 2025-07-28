import React, {useState} from 'react'
import {auth} from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import "./css/signIn.css"
import GDSC_logo from '../components/GDSC_logo';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

import "./css/rules.css"


function Rules() {

  let [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User signed in: ", user.displayName);
      setUser(user);
    }else {
      console.log("User signed out");
      setUser(null);
    }
  });

  return (
    <div className="column mobile-width pb-md">
      <BackButton home></BackButton>
      <GDSC_logo></GDSC_logo>

      <div className="title">
        Rules
      </div>
      <div id="rules" className="round-border mb-md">
        <p className="text-md center">
        Always abide by these to ensure others can also have a great time: <br/>
        </p>
        <ul id="list" className="left text-md pb-sm">
          <li>★ Do not enter any areas that are usually restricted for students</li>
          <li>★ Do not damage the posters</li>
          <li>★ Never share the location of a poster with any other competitor</li>
          </ul>
      </div>

      <div className="title">
        Tips and Tricks
      </div>
      <div id="rules" className="round-border mb-md">
        <p className="text-md center">
          There are a couple of tips to keep in mind when looking for the posters<br/>
        </p>
        <ul id="list" className="left text-md pb-sm">
          <li>★ Posters will be hidden near important features</li>
          <li>★ Usually hidden around a corner, to keep it from direct view</li>
          <li>★ Posters are in generally busy areas of the university</li>
          </ul>
      </div>

      <div className="title">
        Prizing
      </div>
      <div id="rules" className="round-border mb-md">
        <p className="text-md center">
          Once you log into your Google account, you can begin scanning posters and earning points. The rules for points and prizes are as follows:<br/>
        </p>
        <ul id="list" className="left text-md pb-sm">
          <li>★ Scanning posters earlier in the competition rewards more points, initially 200pts. So get in fast to get bonus points.</li>
          <li>★ Once you earn 500pts you can enter the leaderboard</li>
          <li>★ There are 3 prizes to be won. See the GDG ANU Scavenger Hunt Instagram post for the prizes.</li>
          <li>★ At the end of the competition, scanning posters will not grant more points. Winners will be announced shortly after.</li>
          </ul>
      </div>

      <div className="mb-md">

      </div>
      <div className="title">
        Start playing now!
      </div>
      {user && 
        <Button  size={20} back_color="#4285F4" color="#FFFFFF" redirect={"https://gdganu-ar-hunt-camera.web.app/"}>Play Now</Button>
      }
      {!user &&
        <Button  size={20} back_color="#4285F4" color="#FFFFFF" redirect={"./SignIn"}>Play Now</Button>
      }

    </div>
  )
}

export default Rules