var counter = document.getElementById('counter');
var targetNumber = 5298726;
var currentNumber = 0;

function updateCounter() {
  currentNumber += 1493; // 你可以調整這個數值以更改計數速度
  if (currentNumber > targetNumber) {
    currentNumber = targetNumber;
  }
  counter.textContent = currentNumber.toLocaleString('en-US');
  if (currentNumber < targetNumber) {
    requestAnimationFrame(updateCounter);
  }
}

updateCounter();
