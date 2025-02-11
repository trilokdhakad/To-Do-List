const todoList = []; // No more export

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    todoListHTML += `
      <div>${todoObject.name}</div>
      <div>${todoObject.dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button" data-index="${index}">Delete</button>
    `;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton) => {
    deleteButton.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      deleteTodo(Number(index));
    });
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', addTodo);

function addTodo() {
  const nameInputElement = document.querySelector('.js-name-input');
  const name = nameInputElement.value.trim();

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value.trim();

  if (name !== '' && dueDate !== '') {
    todoList.push({ name, dueDate });
    nameInputElement.value = '';
    dateInputElement.value = '';
    renderTodoList();
  }
}

function deleteTodo(index) {
  if (index >= 0 && index < todoList.length) {
    todoList.splice(index, 1);
    renderTodoList();
  }
}
