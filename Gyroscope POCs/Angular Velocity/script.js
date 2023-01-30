const wheel = document.querySelector(".wheel");

let sensor = new Gyroscope();
let x;
let y;
let z;

sensor.start();
sensor.onreading = () => {
  x = sensor.x * 100;
  y = sensor.y * 100;
  z = sensor.z * 100;

  wheel.style.left = wheel.offsetLeft + x + "px";
  wheel.style.top = wheel.offsetTop - y + "px";
  wheel.style.transform = `rotate(${x}deg)`;
};
