let sensor = new Gyroscope();
let x;
let y;
let z;

sensor.start();

sensor.onreading = () => {
  x = sensor.x * 100;
  y = sensor.y * 100;
  z = sensor.z * -33;

  const wheel = document.querySelector(".wheel");

  wheel.style.left = wheel.offsetLeft + x + "px";
  wheel.style.top = wheel.offsetTop - y + "px";
  wheel.style.transform = `rotate(${z}deg)`;
};

sensor.onerror = (event) => {
  alert(event.error.name, event.error.message);
};

const enableGyroscope = () => {
  const sensor = new RelativeOrientationSensor();
  Promise.all([
    navigator.permissions.query({ name: "accelerometer" }),
    navigator.permissions.query({ name: "gyroscope" }),
  ]).then((results) => {
    if (results.every((result) => result.state === "granted")) {
      sensor.start();

      sensor.onreading = () => {
        x = sensor.x * 100;
        y = sensor.y * 100;
        z = sensor.z * -33;

        const wheel = document.querySelector(".wheel");

        wheel.style.left = wheel.offsetLeft + x + "px";
        wheel.style.top = wheel.offsetTop - y + "px";
        wheel.style.transform = `rotate(${z}deg)`;
      };

      sensor.onerror = (event) => {
        alert(event.error.name, event.error.message);
      };
    } else {
      alert("No Permissions to use Relative Orientation Sensor");
    }
  });
};
