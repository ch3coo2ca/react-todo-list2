import React from 'react'; 
import './WeatherContainer.css';
import WeatherInfoContainer from './WeatherInfoContainer.js';

class WeatherContainer extends React.Component {

    
    render() { 
     
         
        return(
            <div className="weather-container"> 
                <WeatherInfoContainer  /> 
            </div>
        );
    }
}

export default WeatherContainer;