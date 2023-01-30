const garden = document.querySelector(".garden");
const ball = document.querySelector(".ball");

const maxX = garden.clientWidth - ball.clientWidth;
const maxY = garden.clientHeight - ball.clientHeight;

const handleOrientation = (event) => {
  let x = event.beta;
  let y = event.gamma;

  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;

  if (
    ball.offsetLeft > 170 ||
    ball.offsetLeft < 0 ||
    ball.offsetTop > 170 ||
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
