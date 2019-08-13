(function () {
  const openDialog = document.getElementById('openDialog');
  const openModalDialog = document.getElementById('openModalDialog');
  const dialogWindow = document.getElementById('dialogWindow');

  // Open Dialog Window Normally
  openDialog.addEventListener('click', () => {
    dialogWindow.show();
  });

  // Open Dialog Window as a Modal
  openModalDialog.addEventListener('click', () => {
    dialogWindow.showModal();
  });

})();