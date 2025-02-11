

export const todoList = []; // Array of todo objects

export function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    todoListHTML += `
      <div>${todoObject.name}</div>
      <div>${todoObject.dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button" data-index="${index}">Delete</button>     <!-- Deleting todo by its index -->
    `;
  });

  // Render the todo list to the DOM
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  // Attach delete event listeners
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton) => {
      deleteButton.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        deleteTodo(Number(index));
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

export function addTodo() {
  // Get the input values for the new todo
  const nameInputElement = document.querySelector('.js-name-input');
  const name = nameInputElement.value.trim();

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value.trim();

  // Check if both name and due date are provided before adding a new todo
  if (name !== '' && dueDate !== '') {
    const newTodo = { name, dueDate };
    todoList.push(newTodo);

    // Clear the input fields after adding the todo
    nameInputElement.value = '';  
    dateInputElement.value = ''; 

    renderTodoList();
  }
}

export function deleteTodo(index) {
  // Remove the todo from the list using its index
  if (index >= 0 && index < todoList.length) {
    todoList.splice(index, 1);
    renderTodoList(); 
  }
}







