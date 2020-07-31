import React, {useState} from 'react'

import { fetchWeather } from './api/fetchWeather'
import './App.css'

const App = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState('')

    const search = async(e) => {
        if(e.key === 'Enter'){
            const data = await fetchWeather(query)

            setWeather(data)
            setQuery('')

            console.log(data)
        }
    }

    return  (

        <div className="main-container">
            <h1 className="title">Digite uma cidade para ver seu Clima:</h1>
            <input 
                type="text"
                className="search"
                placeholder="Pesquise..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
            <p class="lucas-direitos text-light ">© All right Reversed.  <a class=" h6 ml-2 mb-0 lucas " href="https://twitter.com/Agnoos_" target="_blank">Lucas Ricardo</a></p>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>

    );
}

export default App;