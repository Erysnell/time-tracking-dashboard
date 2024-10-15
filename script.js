document.addEventListener('DOMContentLoaded', (event) => {
    let data;

    fetch('data.json')
        .then(response => response.json())
        .then(json => data = json);

    document.querySelectorAll('.card-title a').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const timeframe = event.target.textContent.toLowerCase();

            document.querySelectorAll('.reports').forEach((report, index) => {
                const current = report.querySelector('.current');
                const previous = report.querySelector('.previous');

                current.textContent = data[index].timeframes[timeframe].current;
                previous.textContent = data[index].timeframes[timeframe].previous;
            });
        });
    });
});