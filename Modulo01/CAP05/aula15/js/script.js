window.addEventListener("load", function () {
  const timer = document.querySelector("#timer");
  let count = 0;

  const interval = this.setInterval(() => {
    console.log("interval");
    timer.textContent = ++count;

    if (count === 10) {
      this.clearInterval(interval);
      return;
    }
    if (count % 5 === 0) {
      this.setTimeout(() => {
        timer.textContent = count + ",5";
      }, 500);
    }
  }, 1000);
});
