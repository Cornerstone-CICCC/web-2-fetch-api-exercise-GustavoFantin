const temperature = document.querySelector('.temp')
const windness = document.querySelector('.wind')
const place = document.querySelector('.local')
const clock = document.querySelector('.timer')
const MainContainer = document.querySelector('.container')
const tittle = document.querySelector('.tittle')
const txtWeather = document.querySelector('.temp')
const txtWind = document.querySelector('.wind')
const txtTimer = document.querySelector('.timer')




MainContainer.style.textAlign = 'center';
MainContainer.style.marginTop = '60px';
tittle.style.fontSize = '60px'
txtWeather.style.fontSize = '60px'
txtWeather.style.margin = '-20px 0'
txtWind.style.fontSize = '30px'
place.style.fontSize = '40px'
clock.style.fontSize = '40px'




const weather = async () => {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1')

    const data = await response.json()
    console.log(`${data.current.temperature_2m} ${data.current_units.temperature_2m}`)

    let degrees = `
    <h2>${data.current.temperature_2m} ${data.current_units.temperature_2m}</h2>
    `
    let WindSpeed = `
    <h3>Wind Speed:${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}</h3>
    `

    let newDate = new Date(data.current.time)
    
    let TimerZone = `
    <strong>${data.timezone}</strong>
    `
    
    let hours = `
    <h3>Last updated:${newDate.toLocaleString('en-US')}</h3>    
    `


    temperature.innerHTML = degrees
    windness.innerHTML = WindSpeed
    place.innerHTML = TimerZone
    clock.innerHTML = hours
}
weather()