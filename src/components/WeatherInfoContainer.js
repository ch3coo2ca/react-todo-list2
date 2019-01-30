import React from 'react';
import './WeatherInfoContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

class WeatherInfoContainer extends React.Component {

    handleGetWeather = (lat, lng) => {
        const location = document.querySelector('.weather-location');
        const degree = document.querySelector('.degree-value');
        const humidity = document.querySelector('.humidity-value');
        const API_KEY = "340e8e974a1fbbded588e847e29071b6";
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
        ).then(function (response) {
            return response.json();
        })
            .then(function (json) {
                console.log(json);
                const temperature = json.main.temp;
                const place = json.name;
                const humid = json.main.humidity;
                location.innerHTML = `${place}`;
                degree.innerHTML = `${temperature}`;
                humidity.innerHTML = `${humid}`;
            });

    }

    handleSaveCoords = (coordsObj) => {
        localStorage.setItem('coords', JSON.stringify(coordsObj));
    }

    handleGeoSuccess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
            // latitude: latitude,
            // longitude : longitude
            latitude,
            longitude
        }
        this.handleSaveCoords(coordsObj);
        this.handleGetWeather(latitude, longitude);
    }

    handleGeoError = () => {
        console.log('cant access to geo location');
    }

    handleGetCoords = () => {
        navigator.geolocation.getCurrentPosition(this.handleGeoSuccess, this.handleGeoError);
    }

    handleLoadCoords = () => {
        const loadedCoords = localStorage.getItem('coords');

        if (loadedCoords == null) {
            this.handleGetCoords();
        } else {
            //getWeather 
            const parseCoords = JSON.parse(loadedCoords);
            this.handleGetWeather(parseCoords.latitude, parseCoords.longitude);
            console.log(parseCoords);
        }
    }

    componentDidMount() {
        this.handleLoadCoords();
    }

    render() {
        const {
            handleGeoError,
            handleGeoSuccess,
            handleGetCoords,
            handleGetWeather,
            handleLoadCoords,
            handleSaveCoords
        } = this;

        return (
            <div className="weather-info-container">
                <div className="weather-location">
                    lcoation
                </div>

                <div className="weather-info">
                    <div className="weather-degree">
                        <div className="icon degree-icon">
                            <FontAwesomeIcon icon={faThermometerHalf} />
                        </div>
                        <div className="degree-container">
                            <div className="degree-value"> degree</div>
                            <div className="degree-title"> Degree</div>
                        </div>
                    </div>

                    <div className="weather-humidity">
                        <div className="icon humidity-icon">
                            <FontAwesomeIcon icon={faTint} />
                        </div>
                        <div className="humidity-container">
                            <div className="humidity-value"> degree</div>
                            <div className="humidity-title"> Humidity</div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default WeatherInfoContainer; 