(function() {
  var menuStructure = [{
    title: 'File',
    action: function() {
      alert('open file');
    }
  }, {
    title: 'Format',
    action: function() {
      alert('format content');
    }
  }, {
    title: 'Edit',
    action: function() {
      alert('edit content');
    }
  }, {
    title: 'More stuff',
    submenu: [{
      title: 'Send by',
      submenu: [{
        title: 'Email',
        action: function() {
          alert('emailed');
        }
      }, {
        title: 'Skype',
        action: function() {
          alert('skyped');
        }
      }]
    }]
  }];

  var cmForArea = new ContextMenu('.contextmenu-area', menuStructure);
})();
