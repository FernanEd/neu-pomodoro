const $btnNap = document.querySelector("#btnNap");
const $btnWork = document.querySelector("#btnWork");
const $btnTrip = document.querySelector("#btnTrip");

const $timer = document.querySelector("#timer");

$btnTrip.addEventListener("click", (e) => {
  console.log("trip");
});

$btnWork.addEventListener("click", (e) => {
  console.log("work");
});

$btnNap.addEventListener("click", (e) => {
  console.log("nap");
  runTimer(10);
});

const runTimer = (secondsLeft) => {
  const stopTimer = async (timer) => {
    clearInterval(timer);
    await window.Neutralino.os.showMessageBox({
      title: "STOP USING YOUR PC NOW!",
      content: "Take a nap...",
      type: "WARN",
    });
  };

  let secondsGoneBy = 0;
  $timer.innerText = formatTimer(secondsGoneBy);
  let runningTimer = setInterval(() => {
    secondsGoneBy++;
    $timer.innerText = formatTimer(secondsGoneBy);
    if (secondsGoneBy >= secondsLeft) stopTimer(runningTimer);
  }, 1000);
};

const formatTimer = (seconds) => {
  minutes = seconds >= 60 ? (seconds / 60) | 0 : 0;
  secondsleft = seconds >= 60 ? seconds % minutes : seconds;
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    secondsleft < 10 ? "0" + secondsleft : secondsleft
  }`;
};
