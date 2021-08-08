const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs = {
    startBtn: document.querySelector('[data-action = "start"]'),
    stoptBtn: document.querySelector('[data-action = "stop"]'),
}
refs.startBtn.addEventListener('click', onStartClick);
refs.stoptBtn.addEventListener('click', onStopClick);
let intervalId = null;

function onStopClick() {
    clearInterval(intervalId)
    refs.startBtn.disabled = false;
    
}

function onStartClick() {
    refs.startBtn.disabled = true;
    intervalId = setInterval(() => {
      let randomIndex = randomIntegerFromInterval(0, colors.length -1)
        document.body.style.backgroundColor = colors[randomIndex];
        
        
   
    }, 1000)
    
}


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
