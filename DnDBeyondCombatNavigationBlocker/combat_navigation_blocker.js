window.addEventListener('beforeunload', function(e) {
  // TODO: Only prevent default when active.
  e.preventDefault();
  e.returnValue = '';
});