const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let running = false;

function start() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(timer);
        running = false;
    }
}

function reset() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    display.textContent = "00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let minutes = Math.floor(elapsedTime / (1000 * 60));
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

