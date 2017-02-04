(function() {
  var cardSets = {
    persian: require("json!../assets/persian.json"),
    russian: require("json!../assets/russian.json")
  };
  var cards;
  var icard = 0;
  var flipstate = 0;
  var wordElement = document.querySelector(".word");
  var pronounciationElement = document.querySelector(".pronounciation");
  var menuElement = document.querySelector('nav.menu');
  var menuButton = document.querySelector('button.menu');

  function loadCardSet(cardSet) {
    cards = cardSets[cardSet];
    icard = 0;
    next();
  }

  function render() {
    wordElement.innerHTML = cards[icard][flipstate === 0 ? 'a' : 'b'];
    pronounciationElement.innerHTML = flipstate === 0 ? cards[icard].p : "";
  }

  function flip() {
    flipstate = 1 - flipstate;
    render();
  }

  function next() {
    icard = Math.floor(Math.random() * cards.length);
    flipstate = Math.random() >= 0.5 ? 1 : 0;
    render();
  }

  function openMenu() {
    menuElement.style.transform = 'translateX(0px)';
  }

  function closeMenu() {
    menuElement.style.transform = '';
  }

  function init() {
    document.querySelectorAll('button[data-rel="flip"]').forEach(btn => { btn.addEventListener('click', flip); });
    document.querySelectorAll('button[data-rel="next"]').forEach(btn => { btn.addEventListener('click', next); });
    loadCardSet('persian');

    // Menu.
    menuButton.addEventListener('click', event => {
      openMenu();
      event.stopPropagation();
      event.preventDefault();
    });
    menuElement.addEventListener('click', event => {
      var cardSet = event.target.dataset.cardSet;
      loadCardSet(cardSet);
      event.preventDefault();
      event.stopPropagation();
      closeMenu();
    });
    document.addEventListener('click', event => {
      closeMenu();
    });

    // Navigation by keys.
    document.addEventListener('keydown', event => {
      if (event.keyCode === 39) {
        next();
      } else if (event.keyCode === 32) {
        flip();
      }
    });
  }

  init();

})();
