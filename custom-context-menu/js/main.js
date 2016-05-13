(function() {
  var firstMenuStructure = [{
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
      
  var secondMenuStructure = [{
    title: 'File',
    action: function() {
      alert('open file');
    }
  }, {
    title: 'Edit',
    action: function() {
      alert('edit content');
    }
  }, {
    title: 'Close',
    action: function() {
      alert('closed');
    }
  }];

  var cmForArea = new ContextMenu('.contextmenu-area', firstMenuStructure);
  var cmForBody = new ContextMenu('body', secondMenuStructure);
})();
