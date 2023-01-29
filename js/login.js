const loginForm = document.querySelector(".login-form");
const loginBox = document.querySelector(".login-box");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const greeting2 = document.querySelector(".greeting2");
const todo = document.querySelector(".todo");
const music = document.querySelector(".music-box");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginBox.classList.add(HIDDEN_CLASSNAME);

  const typedUsername = loginInput.value;

  localStorage.setItem(USERNAME_KEY, typedUsername);

  paintGreetings(typedUsername);
}

function paintGreetings(username) {
  greeting.innerHTML = `어서와! ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting2.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);
  music.classList.remove(HIDDEN_CLASSNAME);

  loginBox.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginBox.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
