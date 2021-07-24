
let search=document.getElementById('search-icon');
let city_name=document.getElementById('city-name');
let weather=document.getElementById('weather');
let visibility=document.getElementById('visibility');
let temp=document.getElementById('temp');




search.addEventListener('click',()=>{
    let city=document.getElementById('city').value;
fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=93cfd80ca7b68a32492f5c4ec19fad97`)
.then ((Response)=>{
    return(Response.json());
}
)
.then ((data)=>{
  console.log(data);
    city_name.innerHTML= `Name of city is ${data.name}`;
    weather.innerHTML=data.weather[0].main;
    visibility.innerHTML=`Wind Speed is ${data.wind.speed}meter/sec`;
temp.innerHTML=`Temp is ${data.main.temp} K`
  
 
});
    
});