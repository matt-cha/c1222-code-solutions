var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', tabContainerClicked);

function tabContainerClicked(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      var $tabItem = $tab[i];
      if (event.target === $tabItem) {
        $tabItem.className = 'tab active';
      } else {
        $tabItem.className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab')) {

    var dataViewValue = event.target.getAttribute('data-view');
    for (var k = 0; k < $view.length; k++) {
      if (dataViewValue === $view[k].getAttribute('data-view')) {
        $view[k].className = 'view';
      } else {
        $view[k].className = 'view hidden';
      }
    }
  }
}
