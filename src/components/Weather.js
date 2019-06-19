import React from 'react'

const Weather = ({city, tempurature, humidity, description, country, error }) => (
      <div> 
        {city && country && <p>Location: {city}, {country}</p> }
        {tempurature && <p>Temperature: {tempurature}</p> }
        {humidity && <p>Humidity: {humidity}</p> }
        {description && <p>Conditions:  {description}</p> }
        {error && <p> {error}</p> }
      </div>
    )
  

export default Weather 