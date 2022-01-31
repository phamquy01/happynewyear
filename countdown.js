// const container = document.querySelector(".firework-container");
const fireworcontainer = document.querySelector(".firework-container");

const day = document.querySelector("#day");
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const h1 = document.querySelector("h1");
let datetime = new Date("Feb 1,2022 00:00:00").getTime();

// var w = window.innerWidth,
//   h = window.innerHeight,
//   canvas = document.getElementById("bongbong"),
//   ctx = canvas.getContext("2d"),
//   rate = 60,
//   arc = 300,
//   time,
//   count,
//   size = 3,
//   speed = 200,
//   lights = new Array(),
//   colors = ["pink"];

// canvas.setAttribute("width", w);
// canvas.setAttribute("height", h);

// function init() {
//   time = 0;
//   count = 0;
//   for (var i = 0; o < arc; i++) {
//     lights[i] = {
//       X: Math.ceil(Math.random() * w),
//       Y: Math.ceil(Math.random() * h),
//       toX: Math.random() * 5,
//       toY: Math.random() * 5,
//       c: colors[Math.floor(Math.random() * colors.length)],
//       size: Math.random() * size,
//     };
//   }
// }
// function bongbong() {
//   crx.clearRect(0, 0, w, h);
//   for (var i = 0; o < arc; i++) {
//     var li = lights[i];
//     ctx.beginPath();
//     ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
//     ctx.fillStyle = li.c;
//     ctx.fill();
//     li.x = li.x + li.toX + time * 0.05;
//     li.Y = li.y + li.toY + time * 0.05;
//   }
//   if (time < speed) {
//     time++;
//   }
//   timeID = setTimeout(bongbong, 1000 / rate);
// }

const firework = new Fireworks(fireworcontainer, {
  speed: 4,
  acceleration: 1.05,
  friction: 1,
  gravity: 4,
  particles: 400,
  explosion: 10,
});
const countdown = () => {
  let noW = new Date().getTime();
  let D = datetime - noW;
  let days = Math.floor(D / (1000 * 60 * 60 * 24));
  let hh = Math.floor(D / (1000 * 60 * 60));
  let mm = Math.floor(D / (1000 * 60));
  let ss = Math.floor(D / 1000);

  hh %= 24;
  mm %= 60;
  ss %= 60;

  day.innerText = days;
  hr.innerText = hh;
  mn.innerText = mm;
  sc.innerText = ss;
  if (D < 0) {
    firework.start();
    h1.innerText = "happy new year";

    clearInterval(countdownInterval);
  }
};
countdown();
const countdownInterval = setInterval(countdown, 1000);
