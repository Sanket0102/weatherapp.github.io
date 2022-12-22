// getting data of HTML using DOM

const  app  = document.querySelector(".weather-app");
const timeOutput = document.querySelector('.time')
const dateOutput = document.querySelector('.date')
const cities = document.querySelectorAll('.city');

let weather = {
    apiKey:"21a74b6e401d20b033a136aed0089532",

    // function for fetching weather data using API KEY
     fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city 
        +"&units=metric&appid="
        +this.apiKey)
        .then((response)=> response.json())
        .then((data)=>this.displayWeather(data));
     },
     
    //function for displaying weather on Webpage 
     displayWeather: function(data){
        const {name} = data;
        const {icon , description} =data.weather[0];
        const {temp, humidity} = data.main;
        const { speed } = data.wind;
        const clouds = data.clouds.all;
     
       
       let todayDate = new Date();
       console.log(this.currentDate(todayDate));
       dateOutput.innerText = this.currentDate(todayDate);
       

        console.log(name,icon,description,temp,humidity,speed,clouds);
        document.querySelector(".name").innerText = name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".condition").innerText  = description;
        document.querySelector(".humidity").innerText =  humidity + "%";
        document.querySelector(".wind").innerText =  speed +"km/h";
        document.querySelector(".cloud").innerText =  clouds +"%";
      },
      // function for setting current date
      currentDate:function(dateArgs) {
        let weekday = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"];
        let months = [
          "Jan",
          "Febr",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec"];
        let year = dateArgs.getFullYear();
        let month = months[dateArgs.getMonth()];
        let date2 = dateArgs.getDate();
        let day = weekday[dateArgs.getDay()] ;

        
          return `${day} ${month} ${date2},${year}`;
        },

        // function for search city in the search-bar 
        search:function(){
           this.fetchWeather(document.querySelector(".search").value);
        },
     };

// function for fetching data using search button
document.querySelector('.submit').addEventListener("click",function(e){
    if (document.querySelector('.search').value.length == 0){
        alert("Please Enter a city name");
    }
    else{
    weather.search();
    if(document.querySelector(".search").value== "California"){
      app.style.backgroundImage = 'url(./1.jpg)'
      app.style.opacity == 0
    }
    if(document.querySelector(".search").value== "New York"){
      app.style.backgroundImage = 'url(./2.jpg)'
    }
    if(document.querySelector(".search").value== "Tokyo"){
      app.style.backgroundImage = 'url(./3.jpg)'
    }
    if(document.querySelector(".search").value== "Paris"){
      app.style.backgroundImage = 'url(./4.jpg)'
    }
    if(document.querySelector(".search").value== "Mumbai"){
      app.style.backgroundImage = 'url(./5.jpg)'
    }
    else{
      app.style.backgroundImage = 'url(./6.jpg)'
    }
    document.querySelector('.search').value = "";
    }
    e.preventDefault();
})

// function for fetching data using Enter button
document.querySelector('.search').addEventListener("keyup",function(event){
      if(event.key == "Enter"){
          if (document.querySelector('.search').value.length == 0){
            alert("Please Enter a city name");
          }
          else{
          weather.search();
          if(document.querySelector(".search").value== "California"){
            app.style.backgroundImage = 'url(./1.jpg)'
            app.style.opacity == 0
          }
          if(document.querySelector(".search").value== "New York"){
            app.style.backgroundImage = 'url(./2.jpg)'
          }
          if(document.querySelector(".search").value== "Tokyo"){
            app.style.backgroundImage = 'url(./3.jpg)'
          }
          if(document.querySelector(".search").value== "Paris"){
            app.style.backgroundImage = 'url(./4.jpg)'
          }
          if(document.querySelector(".search").value== "Mumbai"){
            app.style.backgroundImage = 'url(./5.jpg)'
          }
          else{
            app.style.backgroundImage = 'url(./6.jpg)'
          }
          document.querySelector('.search').value = "";
          
          } 
      }
      event.preventDefault();
      app.style.opacity == 0;
})

// Default Initial City
let cityInput = "London";
weather.fetchWeather(cityInput)

// function for fetching weather data of cities in the panel
cities.forEach((city) => {
    city.addEventListener('click',(e) =>{
       
        console.log(e.target.innerText);
        cityInput = e.target.innerHTML;
        weather.fetchWeather(cityInput)
       // weather.fetchWeather(e.target.innerText);
        if(e.target.innerText== "California"){
            app.style.backgroundImage = 'url(./1.jpg)'
            
        }
        if(e.target.innerText== "New york"){
            app.style.backgroundImage = 'url(./2.jpg)'
           
        }
        if(e.target.innerText== "Tokyo"){
            app.style.backgroundImage = 'url(./3.jpg)'
            
        }
        if(e.target.innerText== "Paris"){
            app.style.backgroundImage = 'url(./4.jpg)'
            
        }
        if(e.target.innerText== "Mumbai"){
            app.style.backgroundImage = 'url(./5.jpg)'
            
        }
    });
    })

    
    
    
