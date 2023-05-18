const ballsWrapper = document.querySelector(".balls");
const balls = ballsWrapper.querySelector(".balls-list");

const ballsLine = ballsWrapper.querySelectorAll(".ball-line");
let ballsValue = 0;
let number = [];
ballsLine.forEach((e) => {
  const ball = e.querySelector(".ball-value").innerText;
  number.push(ball);
  ballsValue += Number(ball);
});

ballsLine.forEach((e) => {
  const ball = e.querySelector(".ball-value").innerText;
  e.querySelector(".progress").style.width =
    Math.floor((Number(ball) / ballsValue) * 100) + "%";
});

ballsWrapper.querySelector(
  ".review-value"
).innerText = `(${ballsValue}) оценок`;

const fivePoint = (
  (5 * number[0] +
    4 * number[1] +
    3 * number[2] +
    2 * number[3] +
    1 * number[4]) /
  ballsValue
).toFixed(1);

ballsWrapper.querySelector(".balls-value").innerText = fivePoint;
const reviews = ballsWrapper.querySelectorAll(".review-stars");

reviews.forEach((e) => {
  const stars = e.querySelectorAll(".stars_in");
  console.log(1);
  getBall(stars, fivePoint)
});
