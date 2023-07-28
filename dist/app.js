"use strict";
let todo = document.getElementById("todoList");
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
function createElement(task) {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => toggleCompletion(li);
    return (li);
}
function addTodo() {
    const task = taskInput.value.trim();
    if (task === '')
        alert("Kuch likh to lo bhai");
    const li = createElement(task);
    todoList.appendChild(li);
    taskInput.value = "";
}
function toggleCompletion(todo) {
    todo.style.textDecoration = todo.style.textDecoration === 'line-through' ? 'none' : 'line-through';
}
addButton.addEventListener('click', addTodo);
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});
