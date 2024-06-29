function start(state, game) {
    game.createWizard(state.wizard);
    window.requestAnimationFrame(gameRepeat.bind(null,state,game)); 
}

function gameRepeat(state, game) {
    

    window.requestAnimationFrame(gameRepeat.bind(null,state,game))
}