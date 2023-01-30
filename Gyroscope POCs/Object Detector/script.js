const garden = document.querySelector(".garden");
const ball = document.querySelector(".ball");

const maxX = garden.clientWidth - ball.clientWidth;
const maxY = garden.clientHeight - ball.clientHeight;

const handleOrientation = (event) => {
  let x = event.beta;
  let y = event.gamma;

  ball.style.left = `${x + maxX / 2}px`;
  ball.style.top = `${y + maxY / 2}px`;

  console.log(ball.style.top);
  console.log(ball.style.left);

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
