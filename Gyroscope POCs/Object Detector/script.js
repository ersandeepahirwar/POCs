const garden = document.querySelector(".garden");
const ball = document.querySelector(".ball");

const maxX = garden.clientWidth - ball.clientWidth;
const maxY = garden.clientHeight - ball.clientHeight;

const handleOrientation = (event) => {
  let beta = event.beta;
  let gamma = event.gamma;

  if (beta > 90) {
    beta = 90;
  }

  if (beta < -90) {
    beta = -90;
  }

  if (gamma > 90) {
    gamma = 90;
  }

  if (gamma < -90) {
    gamma = -90;
  }

  if (beta === 0 && gamma === 0) {
    ball.style.top = `${maxY / 2}px`;
    ball.style.left = `${maxX / 2}px`;
  }

  if (beta++) {
    ball.style.top = `${maxY / 2 + beta}px`;
  } else if (beta--) {
    ball.style.top = `${maxY / 2 - beta}px`;
  }

  if (gamma++) {
    ball.style.left = `${maxX / 2 + gamma}px`;
  } else if (gamma--) {
    ball.style.left = `${maxX / 2 - gamma}px`;
  }

  if (
    ball.offsetLeft > 77 ||
    ball.offsetLeft < 0 ||
    ball.offsetTop > 77 ||
    ball.offsetTop < 0
  ) {
    ball.style.backgroundColor = "#ff4500";
  } else {
    ball.style.backgroundColor = "#9acd32";
  }
};

window.addEventListener("deviceorientation", handleOrientation);

const enableOrientation = () => {
  if (
    DeviceOrientationEvent.requestPermission &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    DeviceOrientationEvent.requestPermission()
      .then((state) => {
        if (state === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
        } else {
          alert("Request to access the orientation was rejected!");
        }
      })
      .catch(console.error);
  } else {
    window.addEventListener("deviceorientation", handleOrientation);
  }
};
