const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];

function deleteList(event) {
  const li = event.target.parentNode;
  console.log(li);
  li.remove();
  toDos = toDos.filter((potato) => potato.id !== parseInt(li.id));
  saveToDos();
}

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function creatLi(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  span.innerText = newToDo.text;
  button.addEventListener("click", deleteList);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function enterToDoForm(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObj = { text: newToDo, id: Date.now() };
  toDoInput.value = "";
  toDos.push(newToDoObj);
  creatLi(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", enterToDoForm);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  parseToDos.forEach(creatLi);
  toDos = parseToDos;
}
