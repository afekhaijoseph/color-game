const boxColor = document.getElementById("box");
const coloredButtons = document.querySelectorAll(".color-button");
const singleButton = document.querySelector("#button-one");
const score = document.getElementById("score");
const gameStatus = document.getElementById("game-status");
const reset = document.getElementById("reset");
const randomColors = [
  "rgb(51, 196, 255)",
  "rgb(252, 51, 255)",
  "rgb(255, 91, 51)",
  "rgb(0, 147, 69)",
  "rgb(155, 84, 141)",
  "rgb(17, 50, 88)",
];

let randomColor = Math.floor(Math.random() * randomColors.length);
let boxCurrentColor = randomColors[randomColor];
boxColor.style.backgroundColor = boxCurrentColor;
let counter = 0;

coloredButtons.forEach((coloredButton) => {
  coloredButton.addEventListener("click", () => {
    const chosenButton = window
      .getComputedStyle(coloredButton)
      .getPropertyValue("background-color");
    console.log(chosenButton, boxCurrentColor);
    if (chosenButton == boxCurrentColor) {
      counter++;
      gameStatus.textContent = "That was accurate!";
      gameStatus.classList.add("effect", "success");
      score.textContent = `Score: ${counter}`;
      let randomColor = Math.floor(Math.random() * randomColors.length);
      boxCurrentColor = randomColors[randomColor];
      boxColor.style.backgroundColor = boxCurrentColor;

      setTimeout(() => {
        gameStatus.textContent = "";
        gameStatus.classList.remove("effect", "success");
      }, 2000);
    } else {
      gameStatus.textContent = "I'm not so sure, maybe try again?";
      gameStatus.classList.add("effect", "error");
      setTimeout(() => {
        gameStatus.textContent = "";
        gameStatus.classList.remove("effect", "error");
      }, 2000);
    }
  });
});

reset.addEventListener("click", () => {
  if (counter !== 0) {
    counter = 0;
    score.textContent = `Score: ${counter}`;
    let randomColor = Math.floor(Math.random() * randomColors.length);
    boxCurrentColor = randomColors[randomColor];
    boxColor.style.backgroundColor = boxCurrentColor;
  }
});
