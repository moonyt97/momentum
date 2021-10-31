const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector(".greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function paintGreetings(username){
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.remove();
}


function submitToBtn(event){
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
  localStorage.setItem(USERNAME_KEY,username);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",submitToBtn);
}else{
  paintGreetings(savedUserName);
}

