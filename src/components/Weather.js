import React from 'react'

const Weather = ({city, tempurature, humidity, description, country, error }) => (
      <div> 
        {
          city && country && <p className="weather__key">Location: 
          <span className="weather__value">{city}, {country}</span>
          </p> 
        }
        {
          tempurature && <p className="weather__key">Temperature: 
          <span className="weather__value">{tempurature}</span>
          </p> 
        }
        {
          humidity && <p className="weather__key">Humidity: 
          <span className="weather__value">{humidity}</span>
          </p> 
        }
        {
          description && <p className="weather__key">Conditions:  
          <span className="weather__value">{description}</span>
          </p> 
        }
        {
          error && <p>  {error}</p> 
        }
      </div>
    )  

export default Weather 