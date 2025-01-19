document.addEventListener('DOMContentLoaded', function () {
    const distributors = [
        {
            name: 'Distributor A',
            lastMonth: 1200,
            forecastedNextMonth: 1300,
            yearToDateAvg: 1150
        },
        {
            name: 'Distributor B',
            lastMonth: 850,
            forecastedNextMonth: 950,
            yearToDateAvg: 900
        },
        {
            name: 'Distributor C',
            lastMonth: 2000,
            forecastedNextMonth: 2200,
            yearToDateAvg: 2100
        },
        {
            name: 'Distributor D',
            lastMonth: 450,
            forecastedNextMonth: 500,
            yearToDateAvg: 475
        }
    ];

    const dashboard = document.getElementById('dashboard');

    distributors.forEach(distributor => {
        const card = document.createElement('div');
        card.classList.add('distributor-card');

        card.innerHTML = `
            <h2 class="card-title">${distributor.name}</h2>
            <div class="card-metric">Shipped Last Month: ${distributor.lastMonth} units</div>
            <div class="card-metric">Forecasted Next Month: ${distributor.forecastedNextMonth} units</div>
            <div class="card-metric">YTD Avg: ${distributor.yearToDateAvg} units/month</div>
            <div class="card-footer">
                <span>Data as of: ${new Date().toLocaleDateString()}</span>
            </div>
        `;

        dashboard.appendChild(card);
    });
});
