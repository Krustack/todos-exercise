const form = document.querySelector('form');
const todos = document.querySelector('#todos');
const finished = document.querySelector('#finished');

function addTask(task) {

}

function finishedTask(task) {

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
