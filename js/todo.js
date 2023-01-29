const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";
let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const btn = document.createElement("button");
  btn.innerHTML = " ❌";
  btn.addEventListener("click", deleteTodo);

  list.appendChild(span);
  list.appendChild(btn);
  todoList.appendChild(list);
}

function handleTodoSubmit(e) {
  e.preventDefault();

  const newTodo = todoInput.value;

  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  todos.push(newTodoObj);

  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
