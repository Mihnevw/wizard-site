let state = initState()
let game = initGameObject()

game.startScreen.addEventListener('click', (e) => {
    game.startScreen.classList.add('hidden');
    game.gameSreen.classList.remove('hidden');

    //start game
    start(state, game)
});

