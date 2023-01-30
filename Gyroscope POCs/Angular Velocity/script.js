const wheel = document.querySelector(".wheel");

let sensor = new Gyroscope();
let x;
let y;
let z;

sensor.start();
sensor.onreading = () => {
  x = sensor.x * 100;
  y = sensor.y;
  z = sensor.z;

  wheel.style.left = wheel.offsetLeft + x + "px";
};
