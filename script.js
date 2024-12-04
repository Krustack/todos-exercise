const form = document.querySelector('form');
const todos = document.querySelector('#todos');
const finished = document.querySelector('#finished');

function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;
  todos.appendChild(li);
}

function finishedTask(task) {
  const li = document.createElement('li');
  li.textContent = task;
  finished.appendChild(li);
}

function formSubmitted(event) {
  event.preventDefault();
  const task = form.task.value;
  addTask(task);
  form.reset();
}

function moveTaskToFinished(event) {
    const task = event.target.textContent;
    event.target.remove();
    finishedTask(task);
}

form.addEventListener('submit', formSubmitted);
todos.addEventListener('click', moveTaskToFinished);