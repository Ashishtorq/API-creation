const API_KEY = 'a092fcf391195410956b4fe99e31e648'

const city = ['London', 'Bangalore', 'acdscfecc']

async function getLatLong(city) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`,
  )
  const data = await response.json()

  if (data.length === 0) {
    let error = {
      City: city,
      error:
        'Could not find city with the name above. Please check your spelling',
    }
    console.log(error)
    return
  }

  let lat, lon

  lat = data[0].lat
  lon = data[0].lon

  let currData = await getCurrentWeatherData(lat, lon)

  console.log(currData)
  //   return currData
}

async function getCurrentWeatherData(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  )
  const data = await response.json()

  //   console.log(data)

  let City = data.name
  let currTemp = data.main.temp
  let weather = data.weather[0].main + ',' + data.weather[0].description

  let weatherForecast = await getWeatherForecast(lat, lon)

  return {
    City,
    currTemp,
    weather,
    weatherForecast,
  }
}

async function getWeatherForecast(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  )
  const data = await response.json()
  console.log(data.list[0].rain['3h'])
  //   console.log(data.list[0].rain)
  let forecastData = `${data.list[0].rain['3h']} mm for next 3 hours`
  return forecastData
}

for (let i = 0; i < city.length; i++) {
  getLatLong(city[i])
}

/*
            output format:
            City: London
            Current Temperature: 3°C
            Weather: Rain, moderate rain
            Precipitation Forecast for the next 6 hours (In local time):
            12PM to 3PM: 0.57mm
            3PM to 6PM: 0.11mm

            City: Bangalore
            Current Temperature: 20°C
            Weather: clear sky

            City: acdscfecc
            Could not find city with the name above. Please check your spelling
    */
