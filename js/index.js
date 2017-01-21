(function() {
  var cards = require("json!../assets/persian.json");
  var icard = 0;
  var flipstate = 0;
  var wordElement = document.querySelector(".word");
  var pronounciationElement = document.querySelector(".pronounciation");

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

  function init() {
    document.querySelectorAll('button[data-rel="flip"]').forEach(btn => { btn.addEventListener('click', flip); });
    document.querySelectorAll('button[data-rel="next"]').forEach(btn => { btn.addEventListener('click', next); });
    render();
  }

  init();

})();
