/* global uuid, todos */

var $todoForm = document.querySelector('#todo-form');

$todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var todo = {
    todoId: uuid.v4(),
    task: $todoForm.elements.task.value,
    isCompleted: false
  };
  todos.push(todo);
  $todoList.append(renderTodo(todo));
  $todoForm.reset();
});

var $todoList = document.querySelector('#todo-list');

$todoList.addEventListener('change', function (event) {
  var todoId = event.target.getAttribute('id');
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].todoId === todoId) {
      todos[i].isCompleted = event.target.checked;
      break;
    }
  }
});

for (var i = 0; i < todos.length; i++) {
  var $todo = renderTodo(todos[i]);
  $todoList.appendChild($todo);
}

function renderTodo(todo) {

  /**
   * <li class="list-group-item">
   *   <div class="form-check d-flex">
   *     <input
   *       type="checkbox"
   *       id="{todo.todoId}"
   *       class="form-check-input">
   *     <label
   *       for="{todo.todoId}"
   *       class="form-check-label flex-grow-1 ml-2">
   *       {todo.task}
   *     </label>
   *   </div>
   * </li>
   */

  var $todo = document.createElement('li');
  $todo.setAttribute('class', 'list-group-item');

  var $formCheck = document.createElement('div');
  $formCheck.setAttribute('class', 'form-check d-flex');

  var $checkbox = document.createElement('input');
  $checkbox.checked = todo.isCompleted;
  $checkbox.setAttribute('id', todo.todoId);
  $checkbox.setAttribute('type', 'checkbox');
  $checkbox.setAttribute('class', 'form-check-input');

  var $label = document.createElement('label');
  $label.setAttribute('for', todo.todoId);
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');
  $label.textContent = todo.task;

  $todo.append($formCheck);
  $formCheck.append($checkbox, $label);

  return $todo;
}
