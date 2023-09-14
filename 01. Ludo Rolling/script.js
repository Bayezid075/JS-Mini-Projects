const displayer = document.getElementById("displyer");
const rollBtn = document.getElementById("rollBtn");
const score = document.getElementById("score");

const dicePhotoArr = [
  "/img/1.png",
  "/img/2.png",
  "/img/3.png",
  "/img/4.png",
  "/img/5.png",
  "/img/6.png",
];

rollBtn.addEventListener("click", () => {
  let randIndex = Math.floor(Math.random() * dicePhotoArr.length);
  let randItem = dicePhotoArr[randIndex];
  console.log(randItem);
  displayer.src = randItem;
  if ((displayer.src = dicePhotoArr[0])) {
    score.innerText = 1;
  } else if ((displayer.src = dicePhotoArr[1])) {
    score.innerText = 2;
  } else if ((displayer.src = dicePhotoArr[2])) {
    score.innerText = 3;
  } else if ((displayer.src = dicePhotoArr[3])) {
    score.innerText = 4;
  } else if ((displayer.src = dicePhotoArr[4])) {
    score.innerText = 5;
  } else if ((displayer.src = dicePhotoArr[5])) {
    score.innerText = 6;
  }
});
