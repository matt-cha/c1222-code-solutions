document.addEventListener('DOMContentLoaded', function (event) {
  console.log('document loaded');
});

document.addEventListener('keydown', function (event) {
  console.log('key pressed');
  console.log('  event.key:', event.key);
});

document.addEventListener('mousemove', function (event) {
  console.log('mouse moved');
  console.log('  pageX:', event.pageX, 'pageY:', event.pageY);
});
