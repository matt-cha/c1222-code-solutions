function handleClick(event) {
  var $clickme = document.querySelector('.click-button');
  $clickme.addEventListener('click', handleClick, false);
  console.log('button clicked');
  console.log('event object:', event);
  console.log('event.target', $clickme);
}
handleClick();

function handleMouseover(event) {
  var $hoverme = document.querySelector('.hover-button');
  $hoverme.addEventListener('mouseover', handleMouseover, false);
  console.log('button hovered');
  console.log('event:', event);
  console.log('target.event:', $hoverme);
}
handleMouseover();

function handleDoubleClick(event) {
  var $doubleclicked = document.querySelector('.double-click-button');
  $doubleclicked.addEventListener('dblclick', handleDoubleClick, false);
  console.log('button double-clicked');
  console.log('event object:', event);
  console.log('event.target', $doubleclicked);
}
handleDoubleClick();
