(function() {
  function ContextMenu(parentNodeSelector, structure) {
    this.parentNodeSelector = parentNodeSelector;
    this.structure = structure;

    this.init();
  }

  ContextMenu.prototype.init = function() {
    var self = this;
    var parentNode = document.querySelector(this.parentNodeSelector);
    if (!parentNode) { return };

    parentNode.addEventListener('contextmenu', function(event) {
      self._showContextMenu(event, parentNode);
    }, true);

    document.documentElement.addEventListener('click', function() {
      self._hideContextMenu();
    });
  };

  ContextMenu.prototype._showContextMenu = function(event, parentNode) {
    event.preventDefault();

    var className = '.' + event.target.className;
    var tagName = event.target.tagName.toLowerCase();

    var cm = document.querySelector('.contextmenu');
    if (cm) {
      // remove context menu
      cm.parentNode.removeChild(cm);
    }

    if (className === this.parentNodeSelector || tagName === this.parentNodeSelector) {
      parentNode.appendChild(this._createContextMenuNode('contextmenu'));

      document.querySelector('.contextmenu').style.display = 'block';
      document.querySelector('.contextmenu').style.top = event.clientY + 'px';
      document.querySelector('.contextmenu').style.left = event.clientX + 'px';
    }
  };

  ContextMenu.prototype._hideContextMenu = function() {
    var cm = document.querySelector('.contextmenu');
    if (cm) {
      cm.style.display = 'none';
    }
  };

  ContextMenu.prototype._createContextMenuNode = function(cmContainerClassName, structure) {
    structure = structure || this.structure;
    var cmItem;
    var self = this;
    var cmContainer = document.createElement('ul');
    cmContainer.classList.add(cmContainerClassName);

    structure.forEach(function(el) {
      cmItem = document.createElement('li');
      cmItem.innerText = el.title;

      if (el.action) {
        cmItem.addEventListener('click', el.action);
      }

      if (el.submenu) {
        cmItem.classList.add('has-submenu');

        cmItem.addEventListener('mouseenter', function(event) {
          event.target.children[0].style.display = 'block';
        });
        cmItem.addEventListener('mouseleave', function(event) {
          event.target.children[0].style.display = 'none';
        });

        cmItem.appendChild(self._createContextMenuNode('submenu', el.submenu));
      }

      cmContainer.appendChild(cmItem);
    });

    return cmContainer;
  };

  window.ContextMenu = ContextMenu;
})();
