// offcanvass
// ----------------------------------------------
const offcanvasLinks = document.querySelectorAll('._open-modal');
const offcanvasCloseIcon = document.querySelectorAll('._close-modal');
const body = document.querySelector('body');
const html = document.querySelector('html');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 200;

if (offcanvasLinks.length > 0) {
  for (let index = 0; index < offcanvasLinks.length; index++) {
    const offcanvasLink = offcanvasLinks[index];
    offcanvasLink.addEventListener('click', function (e) {
      e.preventDefault();
      let offcanvasName;
      if (this.hasAttribute('href')) {
        offcanvasName = offcanvasLink.getAttribute('href').replace('#', '');
      } else {
        offcanvasName = offcanvasLink.getAttribute('data-href').replace('#', '');
      }

      const curentoffcanvas = document.getElementById(offcanvasName);
      offcanvasOpen(curentoffcanvas);
    });
  }
}

if (offcanvasCloseIcon.length > 0) {
  for (let index = 0; index < offcanvasCloseIcon.length; index++) {
    const el = offcanvasCloseIcon[index];
    el.addEventListener('click', function (e) {
      e.preventDefault();
      offcanvasClose(el.closest('._modal'));
    });
  }
}

function offcanvasOpen(curentoffcanvas) {
  if (curentoffcanvas && unlock) {
    const offcanvasActive = document.querySelector('._modal._open');
    const offcanvasInputFirst = document.querySelector('#offcanvas-search .search-block__input input');

    if (offcanvasActive) {
      offcanvasClose(offcanvasActive, false);
    } else {
      bodyLock();
    }
    curentoffcanvas.classList.add('_open');
    setTimeout(() => {
      curentoffcanvas.classList.add('_animate');
    }, 50);

    if (offcanvasInputFirst) {
      setTimeout(() => {
        offcanvasInputFirst.focus();
      }, 100);
    }

    curentoffcanvas.addEventListener('click', function (e) {
      if (!e.target.closest('._modal__content')) {
        offcanvasClose(e.target.closest('._modal'));
      }
    });
  }
}

function offcanvasClose(offcanvasActive, doUnlock = true) {
  if (unlock) {
    offcanvasActive.classList.remove('_animate');

    setTimeout(() => {
      offcanvasActive.classList.remove('_open');
    }, 250);
    if (doUnlock) {
      // если открыто фиксированное меню то...
      bodyUnLock();
    }
  }
}

function bodyLock(classEl = 'lock') {
  const lockPaddingValue = window.innerWidth - document.querySelector('.main-wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add(classEl);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock(classEl = 'lock') {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove(classEl);
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const offcanvasActive = document.querySelector('._modal._open');
    offcanvasClose(offcanvasActive);
  }
});

(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();
