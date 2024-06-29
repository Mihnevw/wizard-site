function start(state, game) {
    window.requestAnimationFrame(gameRepeat.bind(null,state,game)); 
}

function gameRepeat(state, game) {
    console.log(state.player)

    window.requestAnimationFrame(gameRepeat.bind(null,state,game))
}