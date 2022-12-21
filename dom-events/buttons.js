var $clickme = document.querySelector('.click-button');
$clickme.addEventListener('click', handleClick, false);
function handleClick(event) {
  console.log('button clicked');
  console.log('event object:', event);
  console.log('event.target', $clickme);
}

var $hoverme = document.querySelector('.hover-button');
$hoverme.addEventListener('mouseover', handleMouseover, false);
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target.event:', $hoverme);
}

var $doubleclicked = document.querySelector('.double-click-button');
$doubleclicked.addEventListener('dblclick', handleDoubleClick, false);
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event object:', event);
  console.log('event.target', $doubleclicked);
}
