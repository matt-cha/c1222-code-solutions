var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', taskListClicked);

function taskListClicked(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    console.log('closest task-list-item:', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}
