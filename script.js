
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-container button');
    const dataUrl = './data.json'; // Asegúrate de que la ruta al archivo JSON sea correcta

    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    updateCards(data, button.textContent.toLowerCase());
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

function updateCards(data, period) {
    const cards = document.querySelectorAll('.items');
    cards.forEach(card => {
        const activity = card.querySelector('p').textContent.toLowerCase();
        const activityData = data.find(item => item.title.toLowerCase() === activity);
        if (activityData) {
            const currentHours = card.querySelector('.cart p:nth-child(3)');
            const previousHours = card.querySelector('.cart span');
            currentHours.textContent = `${activityData.timeframes[period].current}hrs`;
            previousHours.textContent = `Last Week - ${activityData.timeframes[period].previous}hrs`;
        }
    });
}