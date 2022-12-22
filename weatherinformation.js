const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud') ;
const humidityOutput = document.querySelector('.humidity') ;
const windOutput = document.querySelector('.wind');
const form = document.getElementById('locationInput')
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city')

let cityInput = London;

cities.forEach((city)=>{
    city.addEventListener('click',(e)=>{
        cityInput = e.target.innerHTML;
        fetchWeatherData();
        app.style.opacity = "0";
    });
})

form.addEventListener('submit',(e)=>{
    if (search.value.length == 0){
     alert('Please type a city name');
    }
    else{
        cityInput=search.value;
        fetchWeatherData();
        search.value = "";
        app.style.opacity =0;
    }
    e.preventDefault();
});

function dayOfTheWeek(day,month,year){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return weekday[new Date('${day}/${month}/${year})').getday()]
};

function fetchWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={21a74b6e401d20b033a136aed0089532}')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        temp.innerHTML = data.current.temp_c + "&#176;"
        conditionOutput.innerHTML = data.current.condition.text;
        const date = data.location.localtime;
        const y = parseInt(date.substr(0,4));
        const m = parseInt(date.substr(5,2));
        const d = parseInt(date.substr(5,2));
        const time = date.substr(11);

        dateOutput.innerHTML = "${dayOfTheWeek(d,m,y)} ${d} ${m} ${y}";
        timeOutput.innerHTML = time;
        nameOutput.innerHTML = data.location.name;
    })

    const iconID = data.current.condition.icon.substr(
      "//cdn.weatherapi.com/weather/64x64/".length
    )
    icon.src = "./icons/" + iconId;
    cloudOutput.innerHTML - data.current.cloud + "%";
    humidityOutput.innerHTML = data.current.humidity + "%";
    windOutput.innerHTML = data.current.wind_kph + "km/hr";
 
    let timeOfDay = "day";
    const code = data.current.condition.code;
    if(!data.current.is_day){
        timeOfDay = "night"
    }

    if(code == 1000){
        app.style.backgroundImage = url(newyorkweather.jpg);
        btn.style.background = "#e5ba92";
        
    }
}

     

   

