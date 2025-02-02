let timer = 60;
let score = 0;
let hitrn = 0;

function updateScore() {
    score += 10;
    document.querySelector("#updateScore").textContent = score;
}

function makeBubble() {
    let clutter = '';

for(let i=0; i<145; i++) {
    let value = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble"> ${value} </div>`;
}

document.querySelector("#pannel-btm").innerHTML = clutter;
}

function updateHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#changeHit").textContent = hitrn;
}

function runTimer() {
    let timerInt = setInterval(function(){
        if(timer > 0) {
            timer--;
            document.querySelector("#changeTimer").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pannel-btm").innerHTML = `<h1>Game Over & Your score is ${score}.</h1>`;
        }        
    }, 1000);
}

document.querySelector("#pannel-btm").addEventListener("click", function(dest) {
    let clickedNum = Number(dest.target.textContent);
    if(clickedNum === hitrn) {
        updateScore();
        updateHit();
        makeBubble();
    }
})

updateHit();
runTimer();
makeBubble();