let state = initState()
let game = initGameObject()

const availabeKeys = [
    'keyA',       
    'keyS',
    'keyD',
    'keyW',
]

document.addEventListener('keydown', (e) => {
    if (availabeKeys.includes(e.code)) {
        state.keys[e.code] = true;  
    }
});

document.addEventListener('keydown', (e) => {
    if (availabeKeys.includes(e.code)) {
        state.keys[e.code] = false;  
    }
});

game.startScreen.addEventListener('click', (e) => {
    game.startScreen.classList.add('hidden');
    game.gameSreen.classList.remove('hidden');

    //start game
    start(state, game)
});

