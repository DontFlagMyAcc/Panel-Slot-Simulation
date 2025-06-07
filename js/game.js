fetch('components/game.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('game-placeholder').innerHTML = data;
    });