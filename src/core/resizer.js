var defaultWidth = 1440,
  defaultFont = 16,
  mobileFont = 16,
  minWidth = 768,
  minHeight = 600,
  defaultHeight = 900;

function fSize(device, vW, vH) {
  if (vW <= 374) {
    return 13;
  }

  return device
    ? mobileFont
    : defaultFont *
        Math.min(
          Math.max(minWidth, vW) / defaultWidth,
          Math.max(minHeight, vH) / defaultHeight
        );
}

function modifierDevice() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var isMobile = windowWidth <= 767;

  if (document.body) {
    document.body.style.fontSize =
      fSize(isMobile, windowWidth, windowHeight) + "px";
  }

  if (isMobile) {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.remove("mobile");
  }
}

window.onload = function () {
  modifierDevice();
};

window.onresize = function () {
  modifierDevice();
};

modifierDevice();


document.querySelector('.switch__theme-link').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkClassToHTML()
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('.theme').classList.add('dark');
    }
    else {
      document.querySelector('.theme').classList.remove('dark');
    }
  } catch (err) { }
}

addDarkClassToHTML();


document.querySelector('.switch__position-grid').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('positionstyle') === 'list') {
    localStorage.setItem('positionstyle', 'grid');
  }
  else {
    localStorage.setItem('positionstyle', 'grid')
  }
  addListClassToHTML()
});

document.querySelector('.switch__position-list').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('positionstyle') === 'grid') {
    localStorage.setItem('positionstyle', 'list');
  }
  else {
    localStorage.setItem('positionstyle', 'list')
  }
  addListClassToHTML()
});


function addListClassToHTML() {
  try {
    if (localStorage.getItem('positionstyle') === 'list') {
      document.querySelector('.positionstyle').classList.add('list');
    }
    else {
      document.querySelector('.positionstyle').classList.remove('list');
    }
  } catch (err) { }
}

addListClassToHTML();
