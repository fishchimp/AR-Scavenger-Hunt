const OFFICIAL_START_DATE = '2025-07-29T12:00:00+10:00';
const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

// Scoring parameters
const BASE_SCORE = 100;
const DECAY_SCORE = 100;
const DECAY_RATE = -0.3;

const officialStart = new Date(OFFICIAL_START_DATE).getTime();

/**
 * Calculates a score based on an exponential decay formula.
 * @param {number} timeInDays - The time elapsed in days.
 * @returns {number} The calculated score.
 */
function calculateScore(timeInDays) {
    // If time is 0 or negative, return the maximum possible score.
    if (timeInDays <= 0) {
        return BASE_SCORE + DECAY_SCORE;
    }
    return Math.floor(BASE_SCORE + DECAY_SCORE * Math.exp(DECAY_RATE * timeInDays));
}

/**
 * Gets the time elapsed since the start date in days.
 * @returns {number} The time elapsed in days.
 */
function getTimeSinceStart() {
    const now = new Date();
    const differenceInMs = now.getTime() - officialStart;

    // Don't return a negative time if the event hasn't started yet.
    if (differenceInMs < 0) {
        return 0;
    }

    return differenceInMs / MILLISECONDS_IN_A_DAY;
}

/**
 * Calculates the score based on the current time.
 * @returns {number} The current score.
 */
function calculateCurrentScore() {
    return calculateScore(getTimeSinceStart());
}

export { getTimeSinceStart, calculateCurrentScore };