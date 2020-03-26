window.onload = function(){
  //DOM을 가지고 오는 상수
  const clockWrap = document.querySelector(".clock"),
        clock = clockWrap.querySelector("h1"),
        form = document.querySelector(".form"),
        input = form.querySelector("input"),
        greetings = document.querySelector(".greetings");

  //함수에 필요한 상수값들
  const userStorage = "currentUser",
        visibleCN = "visible";

  //현재시간을 가지고 오는 함수
  function getTime(){
    const date = new Date();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const seconds = date.getSeconds() < 10 ? "0"+ date.getSeconds() : date.getSeconds();
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }

  //사용자 이름을 저장하고 인사말을 출력하는 함수들
  function saveName(userName){
    localStorage.setItem(userStorage, userName);
  }
  function submitName(){
    event.preventDefault();
    const userName = input.value;
    printGreetings(userName);
    saveName(userName);
  }

  function getName(){
    form.classList.add(visibleCN);
    form.addEventListener("submit", submitName);
  }
  function printGreetings(userName){
    form.classList.remove(visibleCN);
    greetings.classList.add(visibleCN);
    greetings.innerText = `Hi ${userName}`;
  }
  function loadUser(){
    const currentUser = localStorage.getItem(userStorage);
    if(currentUser === null){
      getName();
    }else{
      printGreetings(currentUser);
    }
  }

  function init(){
    getTime();
    setInterval(getTime, 1000);
    loadUser();
  }
  init();
}
