window.onload = function(){
  const clockwrap = document.querySelector(".clock"),
        clock = clockwrap.querySelector("h1"),
        form = document.querySelector(".form"),
        input = form.querySelector("input");

  function getTime(){
    const date = new Date();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const seconds = date.getSeconds() < 10 ? "0"+ date.getSeconds() : date.getSeconds();
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }

  function

  function init(){
    getTime();
    setInterval(getTime, 1000);
  }
  init();
}
