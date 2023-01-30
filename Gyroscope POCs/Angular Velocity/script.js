let sensor = new Gyroscope();
let x;
let y;
let z;

sensor.start();

sensor.onreading = () => {
  x = sensor.x * 10;
  y = sensor.y * 10;
  z = sensor.z * -3;

  const wheel = document.querySelector(".wheel");

  wheel.style.left = wheel.offsetLeft + x + "px";
  wheel.style.top = wheel.offsetTop - y + "px";
  wheel.style.transform = `rotate(${z}deg)`;
};

sensor.onerror = (event) => {
  alert(event.error.name, event.error.message);
};
