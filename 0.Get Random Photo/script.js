const messiBtn = document.getElementById("messiPhotoBtn");
const displayer = document.getElementById("imgContainer");
const ronaldoBtn = document.getElementById("rolandoPhotoBtn");

let messiPhotoArr = [
  "https://www.investopedia.com/thmb/ckPwC5ARwco1nOSCKVGE57se8MI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1245748917-99e3329a7b8147e8ab648806220ce153.jpg",

  "https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:980/p:16x9/messi-1805.jpg",
  "https://e3.365dm.com/21/04/1600x900/football-messi-lionel_5359730.jpg?20210429092619",
  "https://i.ytimg.com/vi/nVbB3C_hs5g/maxresdefault.jpg",
  "https://imageio.forbes.com/specials-images/imageserve/646e06035ae9f1ea87a62c39/Ex-FC-Barcelona-duo-Lionel-Messi-and-Neymar-could-play-for-Manchester-United-next/960x0.jpg?format=jpg&width=960",
];
messiBtn.addEventListener("click", () => {
  const randInd = Math.floor(Math.random() * messiPhotoArr.length);
  const randArr = messiPhotoArr[randInd];
  displayer.src = randArr;
});
let ronaldoPhotoArr = [
  "https://www.arabianbusiness.com/cloud/2023/03/06/Cristiano-Ronaldo.jpg",
  "https://assets.telegraphindia.com/telegraph/2023/Jan/1672718945_ronaldo.jpg",
  "https://e0.365dm.com/17/12/2048x1152/skysports-cristiano-ronaldo-real-madrid-football_4178227.jpg",
  "https://st1.latestly.com/wp-content/uploads/2019/08/Cristiano-Ronaldo-Sii-Celebration-Photos.jpg",
  "https://static.standard.co.uk/2022/11/24/17/newFile-2.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
];
ronaldoBtn.addEventListener("click", () => {
  const randInd = Math.floor(Math.random() * ronaldoPhotoArr.length);
  const randArr = ronaldoPhotoArr[randInd];
  displayer.src = randArr;
});
