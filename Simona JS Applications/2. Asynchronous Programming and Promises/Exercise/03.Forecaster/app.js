function attachEvents() {
    const inputLocation = document.getElementById('location');
    const getWeatherBtn = document.getElementById('submit');
    const forecast = document.getElementById('forecast');
    const currentWeather = document.getElementById('current');
    const upcomingWeather = document.getElementById('upcoming');

    const conditions = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176',
    }

    getWeatherBtn.addEventListener('click', getWeather);

    function getWeather() {
        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(res => res.json())
            .then(data => {
                const cityIndex = data.findIndex(el => el.name == inputLocation.value)
                forecast.style.display = 'block';
                if (cityIndex === -1) {
                    throw new Error();
                }

                let cityCode = data[cityIndex].code;

                //Current 
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`)
                    .then(res => res.json())
                    .then(data => {
                        //main div
                        const forecasts = document.createElement('div');
                        forecasts.className = 'forecasts';

                        //condition symbol span
                        const condtSymbol = document.createElement('span');
                        condtSymbol.className = 'condition symbol';
                        condtSymbol.innerHTML = conditions[data.forecast.condition];
                        forecasts.appendChild(condtSymbol);

                        //condition info spans
                        let condition = document.createElement('span');
                        condition.className = 'condition';

                        //span1
                        const span1 = document.createElement('span');
                        span1.className = 'forecast-data';
                        span1.textContent = data.name;
                        condition.appendChild(span1);

                        //span2
                        const span2 = document.createElement('span');
                        span2.className = 'forecast-data';
                        span2.innerHTML = `${data.forecast.low}&#176/${data.forecast.high}&#176`;
                        condition.appendChild(span2);

                        //span3
                        const span3 = document.createElement('span');
                        span3.className = 'forecast-data';
                        span3.textContent = data.forecast.condition;
                        condition.appendChild(span3);

                        forecasts.appendChild(condition);
                        currentWeather.appendChild(forecasts);

                    });

                //Upcoming Weather
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`)
                    .then(res => res.json())
                    .then(data => {
                        //main div
                        const fcInfo = document.createElement('div');
                        fcInfo.className = 'forecast-info';

                        //Each day from the array spans
                        data.forecast.forEach(el => {
                            //mainspan
                            const upcoming = document.createElement('span');
                            upcoming.className = 'upcoming';

                            //symbol span
                            const symbol = document.createElement('span');
                            symbol.className = 'symbol';
                            symbol.innerHTML = conditions[el.condition];
                            upcoming.appendChild(symbol);

                            //forecast data first span
                            const fcData = document.createElement('span');
                            fcData.className = 'forecast-data';
                            fcData.innerHTML = `${el.low}&#176/${el.high}&#176`;
                            upcoming.appendChild(fcData);

                            //forcast data second span
                            const fcData2 = document.createElement('span');
                            fcData2.className = 'forecast-data';
                            fcData2.textContent = el.condition;
                            upcoming.appendChild(fcData2);
                            
                            fcInfo.appendChild(upcoming);
                        });

                        upcomingWeather.append(fcInfo);

                    })
                    .catch(() => (forecast.textContent = "Error"));

            })
            .catch(() => (forecast.textContent = 'Error'));
    }
}

attachEvents();