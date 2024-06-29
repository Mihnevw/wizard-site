function initState() {
    const state = {
        player: 'Pesho',
        wizard: {
            width: 89,
            height:100,
            startX: Math.floor(Math.random() * 1440),
            startY: Math.floor(Math.random() * 500),
        }
    }
    //Тук ще държим състоянието на нашата игра 
    return state;
}