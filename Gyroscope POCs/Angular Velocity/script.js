let sensor = new Gyroscope();
let x;
let y;
let z;
let reports;

sensor.start();
sensor.onreading = () => {
  reports = `<p>X-Axis Angular Velocity = ${sensor.x}</p>`;
  reports += `<p>Y-Axis Angular Velocity = ${sensor.y}</p>`;
  reports += `<p>Z-Axis Angular Velocity = ${sensor.z}</p>`;

  const object = document.getElementById("object");
  reports += `<p>Object Current Position in X-Axis = ${object.offsetLeft}</p>`;
  reports += `<p>Object Current Position in Y-Axis = ${object.offsetTop}</p>`;
  reports += `<p>Object Current Position in Y-Axis = ${z}deg</p>`;

  document.getElementById("reports").innerHTML = reports;

  x = sensor.x * 100;
  y = sensor.y * 100;
  z = sensor.z * 100;

  object.style.left = object.offsetLeft + x + "px";
  object.style.top = object.offsetTop - y + "px";
  object.style.transform = `rotate(${x}deg)`;
};

const errorHandler = (event) => {
  swal(event.error.name, event.error.message, "error");
};
sensor.onerror = errorHandler;
