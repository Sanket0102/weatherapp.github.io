const  app  = document.querySelector(".weather-app");
const timeOutput = document.querySelector('.time')
const dateOutput = document.querySelector('.date')
const cities = document.querySelectorAll('.city');
let cityInput = "London";
apiKey:"21a74b6e401d20b033a136aed0089532",

function fetchWeather (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city 
        +"&units=metric&appid="
        +apiKey)
        .then((response)=> response.json())
        .then((data)=>displayWeather(data));
     },
function  displayWeather(data){
        const {name} = data;
        const {icon , description} =data.weather[0];
        const {temp, humidity} = data.main;
        const { speed } = data.wind;
        const { cloudy } = data.clouds;
       const date1 = data.dt;
       const date = toString(date1)
       console.log(typeof(date));
       const y = parseInt(date.substr(0,4));
       const m = parseInt(date.substr(5,2));
       const d = parseInt(date.substr(8,2));
       const time = date.substr(11);
       console.log(dayOfTheWeek(d,m,y))

       dateOutput.innerHTML = '${dayOfTheWeek(d,m,y)} ${d} ${m} ${y}'

        console.log(name,icon,description,temp,humidity,speed,cloudy);
        document.querySelector(".name").innerText = name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".condition").innerText  = description;
        document.querySelector(".humidity").innerText =  humidity + "%";
        document.querySelector(".wind").innerText =  speed +"km/h";
        document.querySelector(".cloud").innerText =  cloudy +"%";
    },
    function search() {
        fetchWeather(document.querySelector(".search").value);
    },

    function dayOfTheWeek(day,month,year){
        const weekday  = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"];
            return weekday[new Date('${day}/${month}/${year}').getDay()]   
    }




document.querySelector('.submit').addEventListener("click",function(e){
    if (document.querySelector('.search').value.length == 0){
        alert("Please Enter a city name");
    }
    else{
    
    search();
    document.querySelector('.search').value = "";
    }
    e.preventDefault();
})

document.querySelector('.search').addEventListener("keyup",function(event){
      if(event.key == "Enter"){
          if (document.querySelector('.search').value.length == 0){
            alert("Please Enter a city name");
          }
          else{
          search();
          
          document.querySelector('.search').value = "";
          } 
      }
      event.preventDefault();
      app.style.opacity == 0;
})

cities.forEach((city) => {
    city.addEventListener('click',(e) =>{
        console.log(e.target.innerText);
        fetchWeather(e.target.innerText);
        if(e.target.innerText== "California"){
            document.body.style.backgroundImage = "url(california.jpg)";
          }
    });
    })
    
    
