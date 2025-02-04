const boxColor = document.getElementById("box");
const colorChoice = document.querySelectorAll(".color-button");
const score = document.getElementById("score");
const gameStatus = document.getElementById("game-status");
const reset = document.getElementById("reset");

const firstColor = [
  "rgb(51, 196, 255)",
  "rgb(12, 153, 209)",
  "rgb(31, 113, 207)",
  "rgb(101, 111, 209)",
  "rgb(14, 82, 178)",
  "rgb(43, 122, 196)",
];
const SecondColor = [
  "rgb(252, 51, 255)",
  "rgb(173, 35, 148)",
  "rgb(196, 135, 176)",
  "rgb(105, 17, 106)",
  "rgb(195, 155, 189)",
  "rgb(222, 17, 177)",
];
const thirdColor = [
  "rgb(255, 91, 51)",
  "rgb(255, 139, 51)",
  "rgb(217, 131, 107)",
  "rgb(255, 51, 51)",
  "rgb(226, 56, 14)",
  "rgb(114, 26, 4)",
];
const fourthColor = [
  "rgb(0, 147, 69)",
  "rgb(43, 246, 138)",
  "rgb(8, 89, 4)",
  "rgb(104, 223, 93)",
  "rgb(83, 140, 45)",
  "rgb(10, 44, 26)",
];
const fifthColor = [
  "rgb(247, 16, 193)",
  "rgb(155, 84, 141)",
  "rgb(234, 170, 221)",
  "rgb(158, 8, 128)",
  "rgb(99, 16, 91)",
  "rgb(139, 105, 133)",
];
const sixthColor = [
  "rgb(231, 228, 169)",
  "rgb(239, 228, 16)",
  "rgb(193, 184, 12)",
  "rgba(172, 164, 21, 0.48)",
  "rgb(199, 229, 31)",
  "rgb(152, 149, 86)",
];

const randomColorSetArrs = [
  firstColor,
  SecondColor,
  thirdColor,
  fourthColor,
  fifthColor,
  sixthColor,
];

let counter = 0;

const getNewColors = () => {
  let randomColorSetNum = Math.floor(Math.random() * randomColorSetArrs.length);
  let randomColorSet = randomColorSetArrs[randomColorSetNum];
  let randomColorNum = Math.floor(Math.random() * randomColorSet.length);
  let targetBoxColor = randomColorSet[randomColorNum];
  boxColor.style.backgroundColor = targetBoxColor;

  console.log(randomColorSet);
  console.log(targetBoxColor);
  return {
    targetBoxColor,
    randomColorSet,
  };
};

const fillUpButtons = (getNewColors) => {
  const newColor = getNewColors();
  for (let i = 0; i < colorChoice.length; i++) {
    colorChoice[i].style.backgroundColor = newColor.randomColorSet[i];
  }

  return newColor.targetBoxColor;
};

const addEventListeners = (targetBoxColor) => {
  colorChoice.forEach((selectedButton) => {
    selectedButton.addEventListener("click", () =>
      handleClick(selectedButton, targetBoxColor)
    );
  });
};

const handleClick = (selectedButton, targetBoxColor) => {
  const chosenButton = window
    .getComputedStyle(selectedButton)
    .getPropertyValue("background-color");
  console.log(chosenButton, targetBoxColor);
  if (chosenButton === targetBoxColor) {
    counter++;
    gameStatus.innerHTML = `<i class="fa-solid fa-check"></i>  That was correct, awesome!`;
    gameStatus.classList.add("effect", "success");
    score.innerHTML = `Score: ${counter}`;
    startGame();
  } else {
    gameStatus.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>  That's wrong, maybe try again?`;
    gameStatus.classList.add("effect", "error");
    setTimeout(() => {
      gameStatus.textContent = "";
      gameStatus.classList.remove("effect", "error");
    }, 1500);
  }
};

const startGame = () => {
  const targetBoxColor = fillUpButtons(getNewColors);
  addEventListeners(targetBoxColor);
};

startGame();

reset.addEventListener("click", () => {
  counter = 0;
  score.innerHTML = `Score: ${counter}`;
  gameStatus.textContent = "";
  startGame();
});
