const startScreen = document.querySelector('.start-screen');
const gameSreen = document.querySelector('.game-screen');

startScreen.addEventListener('click', (e) => {
    console.log('start')
    e.currentTarget.classList.add('hidden');
    gameSreen.classList.remove('hidden');
})