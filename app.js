let timerRound;
let timerBreak;
let timeLeftRound = 1500;
let timeLeftBreak = 300;
let isRoundTimerRunning = false;
let isBreakTimerRunning = false;

const roundTimerDisplay = document.getElementById('timerRound');
const breakTimerDisplay = document.getElementById('timerBreak');

const startRoundButton = document.getElementById('start-round');
const startBreakButton = document.getElementById('start-break');

function timerDisplayRound() {
    const minutesRound = Math.floor(timeLeftRound / 60);
    const secondsRound = timeLeftRound % 60;
    const formattedTimeRound = `${minutesRound.toString().padStart(2, '0')}:${secondsRound.toString().padStart(2, '0')}`;
    document.getElementById('timerRound').textContent = formattedTimeRound;
}

function timerDisplayBreak() {
    const minutesBreak = Math.floor(timeLeftBreak / 60);
    const secondsBreak = timeLeftBreak % 60;
    const formattedTimeBreak = `${minutesBreak.toString().padStart(2, '0')}:${secondsBreak.toString().padStart(2, '0')}`;
    document.getElementById('timerBreak').textContent = formattedTimeBreak;
}

function startTimeRound() {
    if (!isRoundTimerRunning) {
        timerRound = setInterval(() => {
            timerRound.textContent = timerDisplayRound();
            if (timeLeftRound > 0) {
                timeLeftRound--;
            } else {
                clearInterval(timerRound);
                restartTimerRound();
                alert("Round Time is Up!");
            }
        }, 1000);
        isRoundTimerRunning = true;
    }
}

function startTimeBreak() {
    if (!isBreakTimerRunning) {
        timerBreak = setInterval(() => {
            timerBreak.textContent = timerDisplayBreak();
            if (timeLeftBreak > 0) {
                timeLeftBreak--;
            } else {
                clearInterval(timerBreak);
                restartTimerBreak();
                alert("Break Time is Up!");
            }
        }, 1000);
        isBreakTimerRunning = true;
    }
}

function restartTimerRound() {
    timeLeftRound = 1500;
    roundTimerDisplay.textContent = timerDisplayRound();
}

function restartTimerBreak() {
    timeLeftBreak = 300;
    breakTimerDisplay.textContent = timerDisplayBreak();
}

roundTimerDisplay.textContent = timerDisplayRound();
breakTimerDisplay.textContent = timerDisplayBreak();