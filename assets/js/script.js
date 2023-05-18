const getBall = function(stars, ball){
  stars.forEach((e, i) => {
    if (ball >= i + 1) {
      e.style.width = "100%";
    } else {
      e.style.width = "0%";
      if (ball < i + 1 && ball > i) {
        e.style.width = "50%";
      }
    }
  });
}


const reviewPoints = document.querySelectorAll(".review-point");

reviewPoints.forEach((e) => {
  const stars = e.querySelectorAll(".stars_in");
  const ball = e.getAttribute('data-reviews')
  getBall(stars, ball)
});
