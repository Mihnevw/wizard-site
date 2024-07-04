function initState() {
    let startX = Math.floor(Math.random() * 1440)
    let startY = Math.floor(Math.random() * 500)

    const state = {
        player: 'Pesho',
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 10,
        },
        bugStats: {
            width:50,
            height:50,
        },
        keys: {
            keyA: false,
            keyS: false,
            keyD: false,
            keyW: false,
        }
    }
    //Тук ще държим състоянието на нашата игра 
    return state;
}