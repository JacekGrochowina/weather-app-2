import React from 'react';

const Result = props => {

    const { date, city, sunrise, sunset, temp, pressure, wind, err } = props.weather;

    let content = null;

    if (!err && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        content = (
            <div className="content">
                <h1>Wyszukiwanie dla miasta {city}</h1>
                <ul>
                    <li>Dane dla dnia i godziny: <span>{date}</span></li>
                    <li>Aktualna temperatura: <span>{temp} &#176;C</span></li>
                    <li>Wschód słońca dzisiaj: <span>{sunriseTime}</span></li>
                    <li>Zachód słońca dzisiaj: <span>{sunsetTime}</span></li>
                    <li>Aktualna siła wiatru: <span>{wind} m/s</span></li>
                    <li>Aktualne ciśnienie: <span>{pressure} hPa</span></li>
                </ul>
            </div>
        )
    }

    return (
        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>
    );
}

export default Result;