let sensor = new Gyroscope();
let x;
let y;
let z;

sensor.start();

sensor.onreading = () => {
  x = sensor.x * 100;
  y = sensor.y * 100;
  z = sensor.z * -33;

  const wheel = document.querySelector(".ball");

  wheel.style.left = ball.offsetLeft + x + "px";
  wheel.style.top = ball.offsetTop - y + "px";
  wheel.style.transform = `rotate(${x}deg)`;
};

sensor.onerror = (event) => {
  alert(event.error.name, event.error.message);
};
