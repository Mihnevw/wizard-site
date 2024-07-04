//Всички DOM Елементи които искаме да визуализираме 
function initGameObject() {
    const startScreen = document.querySelector('.start-screen');
    const gameSreen = document.querySelector('.game-screen');
    
    return {
       startScreen,
       gameSreen,
       createWizard(inititialState) {
        let wizardElement = document.createElement('div');
        wizardElement.classList.add('wizard');
        wizardElement.style.height = inititialState.height + 'px'; //Така сетваме големината на нашия DOM елемента да е тончно толкова колкото сме го задали предварително в инишъл стейта 
        wizardElement.style.width = inititialState.width + 'px';

        wizardElement.style.left = inititialState.posX + 'px';
        wizardElement.style.top = inititialState.posY + 'px';

        this.wizardElement = wizardElement;

        this.gameSreen.appendChild(wizardElement);

        return wizardElement
       },

       createBug() {
        const bugElement = document.createElement('div');
        bugElement.classList.add('bug');

        bugElement.style.width = stats.width + 'px';
        bugElement.style.height = stats.height + 'px';
        bugElement.style.left = gameSreen.offsetWidth - stats.width + 'px';
        bugElement.style.top = Math.floor(Math.random() * gameSreen.offsetHeight - stats.height) + 'px';

        gameSreen.appendChild(bugElement);
       }
    }
};