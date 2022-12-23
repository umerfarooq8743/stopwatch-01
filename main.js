let icon = document.getElementById('butIcon');

let pauseB = document.getElementById('but1');
let playB = document.getElementById('but2');
let resetB = document.getElementById('but3');

let hourTen = document.getElementById('hour1');
let hourUnit = document.getElementById('hour');
let minTen = document.getElementById('min1');
let minUnit = document.getElementById('min');
let secTen = document.getElementById('sec1');
let secUnit = document.getElementById('sec');

playB.addEventListener('mouseover', () => {
    playB.style.color = 'royalblue';
    playB.style.backgroundColor = 'white';
    playB.style.boxShadow = '2px 2px 2px #464a4a';
});

playB.addEventListener('mouseout', () => {
    playB.style.color = 'white';
    playB.style.backgroundColor = 'royalblue';
    playB.style.boxShadow = 'none';
});

pauseB.addEventListener('mouseover', () => {
    pauseB.style.color = 'royalblue';
    pauseB.style.backgroundColor = 'white';
    pauseB.style.boxShadow = '2px 2px 2px #464a4a';
});

pauseB.addEventListener('mouseout', () => {
    pauseB.style.color = 'white';
    pauseB.style.backgroundColor = 'transparent';
    pauseB.style.boxShadow = 'none';
});

resetB.addEventListener('mouseover', () => {
    resetB.style.color = 'royalblue';
    resetB.style.backgroundColor = 'white';
    resetB.style.boxShadow = '2px 2px 2px #464a4a';
});

resetB.addEventListener('mouseout', () => {
    resetB.style.color = 'white';
    resetB.style.backgroundColor = 'transparent';
    resetB.style.boxShadow = 'none';
});

playB.addEventListener('click', play);
pauseB.addEventListener('click', pause);
resetB.addEventListener('click', reset);

let interval;

function play(){
    interval = setInterval(timer, 1000);
    playB.disabled = true;
};


function timer(){
    secUnit.innerHTML ++;
    if (secUnit.innerHTML == 10){
        secUnit.innerHTML = 0;
        secTen.innerHTML ++;
    };
    if (secTen.innerHTML == 6){
        secTen.innerHTML = 0;
        minUnit.innerHTML ++;
    };
    
    if (minUnit.innerHTML == 10){
        minUnit.innerHTML = 0;
        minTen.innerHTML ++;
    };
    if (minTen.innerHTML == 6){
        minTen.innerHTML = 0;
        hourUnit.innerHTML ++;
    };

    if (hourUnit.innerHTML == 10){
        hourUnit.innerHTML = 0;
        hourTen.innerHTML ++;
    };
    if (hourTen.innerHTML == 6){
        hourTen.innerHTML = 0;
    };
    
};

function pause(){
    playB.disabled = false;
    clearInterval(interval);
};

function reset(){
    secUnit.innerHTML = 0;
    secTen.innerHTML = 0;
    minUnit.innerHTML = 0;
    minTen.innerHTML = 0;
    hourUnit.innerHTML = 0;
    hourTen.innerHTML = 0;
    pause()
};

