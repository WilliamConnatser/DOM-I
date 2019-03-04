class Timer {
    constructor() {
        this.time = 0;
        this.timer = document.querySelector('.digits');
        this.secondTens = document.getElementById('secondTens');
        this.secondOnes = document.getElementById('secondOnes');
        this.msHundreds = document.getElementById('msHundreds');
        this.msTens = document.getElementById('msTens');
    }

    increment() {

        this.time += 10;

        this.updateDOM();

        if (this.time === 10000) {
            this.timer.classList.add('redDigit');
            return false;
        } else {
            return true;
        }
    }

    updateDOM() {
        const timeString = (this.time / 10).toString();

        if (timeString.length > 3) {
            this.secondTens.textContent = timeString[0];
            this.secondOnes.textContent = timeString[1];
            this.msHundreds.textContent = timeString[2];
            this.msTens.textContent = timeString[3];
        } else if (timeString.length > 2) {
            this.secondTens.textContent = 0;
            this.secondOnes.textContent = timeString[0];
            this.msHundreds.textContent = timeString[1];
            this.msTens.textContent = timeString[2];
        } else if (timeString.length > 1) {
            this.secondTens.textContent = 0;
            this.secondOnes.textContent = 0;
            this.msHundreds.textContent = timeString[0];
            this.msTens.textContent = timeString[1];
        } else {

            this.secondTens.textContent = 0;
            this.secondOnes.textContent = 0;
            this.msHundreds.textContent = 0;
            this.msTens.textContent = timeString[0];
        }
    }
}

window.onload = () => {

    var timer = new Timer();
    const ID = setInterval(function () {
        if (!timer.increment()) {
            clearInterval(ID);
        }
    }, 10);

}