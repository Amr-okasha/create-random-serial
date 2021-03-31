function createSerial() {
  "use strict";

  let chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    seriaLength = 20,
    randomSerial = "";
  for (let i = 0; i < seriaLength; i++) {
    let randomNum = Math.floor(Math.random() * chars.length);
    randomSerial += chars[randomNum];
    document.getElementById("idserial").textContent = randomSerial;
  }
}
createSerial();
