const garden = document.querySelector(".garden");
const ball = document.querySelector(".ball");

const maxX = garden.clientWidth - ball.clientWidth;
const maxY = garden.clientHeight - ball.clientHeight;

const handleOrientation = (event) => {
  let x = event.beta;
  let y = event.gamma;

  if (x > 90) {
    x = 90;
  }

  if (x < -90) {
    x = -90;
  }

  if (y > 90) {
    y = 90;
  }

  if (y < -90) {
    y = -90;
  }

  x += 90;
  y += 90;

  ball.style.left = `${(maxX * x) / 180 - 1}px`;
  ball.style.top = `${(maxY * y) / 180 - 1}px`;
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
