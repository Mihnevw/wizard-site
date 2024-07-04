function start(state, game) {
    game.createWizard(state.wizard);
    window.requestAnimationFrame(gameRepeat.bind(null,state,game)); 
}

function gameRepeat(state, game) {
    const { wizard } = state;
    const { wizardElement } = game;

    //Moce wizard
    if (state.keys.keyA) {
       wizard.posX -= wizard.speed;
    }

    if (state.keys.keyS) {
        wizard.posY += wizard.speed;
    }

    if (state.keys.keyD) {
        wizard.posY += wizard.speed;
    }

    if (state.keys.keyW) {
        wizard.posY -= wizard.speed;
    }

    //Render
    wizardElement.style.left =  wizard.posX + 'px';
    wizardElement.style.top =  wizard.posY + 'px';

    window.requestAnimationFrame(gameRepeat.bind(null,state,game))
}