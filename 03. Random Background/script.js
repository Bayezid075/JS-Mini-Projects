const btn = document.getElementById("btn");
const body = document.getElementById("body");

const colorArr = [
  "red",
  "blue",
  "black",
  "green",
  "gray",
  "yellow",
  "lightgreen",
];

btn.addEventListener("click", () => {
  const randIndex = Math.floor(Math.random() * colorArr.length);
  const randArr = colorArr[randIndex];
  body.style.background = randArr;
  body.style.transition = "0.1s all ease-in-out";
});
