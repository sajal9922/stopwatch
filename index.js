const timerElm = document.querySelector('.timer');
const startButtonElm = document.querySelector('.start');
const stopButtonElm = document.querySelector('.stop');
const resetButtonElm = document.querySelector('.reset');
// console.log(stopButtonElm);

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerElm.textContent = formateTime(elapsedTime);
  }, 10);

  startButtonElm.disabled = true;
  stopButtonElm.disabled = false;
}

function formateTime(elapsedTime) {
  const millisecond = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  return (
    (hours ? (hours > 9 ? hours : '0' + hours) : '00') +
    ':' +
    (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
    ':' +
    (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00') +
    '.' +
    (millisecond > 9 ? millisecond : '0' + millisecond)
  );
}

function stopTimer() {
  clearInterval(timerInterval);
  startButtonElm.disabled = false;
  stopButtonElm.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  startButtonElm.disabled = false;
  stopButtonElm.disabled = true;
  timerElm.textContent = '00:00:00';
}

startButtonElm.addEventListener('click', startTimer);
stopButtonElm.addEventListener('click', stopTimer);
resetButtonElm.addEventListener('click', resetTimer);
