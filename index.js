const appid='e313a375b54ca7fa1b185b65232c4cc1';
const apiurl='https://api.openweathermap.org/data/2.5/weather?';


const inputIdEle = document.getElementById('inputId');
const buttonSubmitEle = document.getElementById('buttonSubmit');
// console.log(buttonSubmitEle);
const imageTagEle = document.getElementById('imageTag');
        // console.log(imageTagEle);

async function checkWeather(city,units){
    await fetch(apiurl+`&q=${city}`+`&appid=${appid}`+ `&units=${units}`)
    .then(response=>{
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error('Api Request failed');
        }
    })
    .then(data=>{
        console.log(apiurl+city+`&appid=${appid}`)
        // const data = await response.json();
        // console.log(`${apiurl}&appid=${appid}`)
        console.log(data);
        if(units=='metric'){
            document.getElementById('Temperature').innerHTML=Math.round(data.main.temp)+'&#8451;';
            document.getElementById('Wind').innerHTML=data.wind.speed+ ' km/h';
        }
        else{
            document.getElementById('Temperature').innerHTML=Math.round(data.main.temp)+'&#8457;';
            // document.getElementById('Wind').innerHTML=(data.wind.speed*2.236)+ ' km/h';
        }
        document.getElementById('City').innerHTML=data.name;
        document.getElementById('Humidity').innerHTML=data.main.humidity + '%';
        if(data.weather[0].main=='Mist'){
            imageTagEle.src = './images/mist.png'
        }
        else if(data.weather[0].main=='Clouds'){
            imageTagEle.src='./images/clouds.png';
        }
        else if (data.weather[0].main=='Drizzle'){
            imageTagEle.src='./images/drizzle.png';
        }
        else if (data.weather[0].main=='Clear'){
            imageTagEle.src='./images/clear.png';
        }
        else if (data.weather[0].main=='Rain'){
            imageTagEle.src='./images/rain.png';
        }
        else if(data.weather[0].main =='Snow'){
            imageTagEle.src='./images/snow.png';
        }
        
        
    })
    .catch(error=>{
        console.log(error);
        alert("enter the valid city name");
    });
    
}

buttonSubmitEle.addEventListener('click',functionCall);

function functionCall(){
    
    checkWeather(inputIdEle.value,'metric');
    
}
const DegreeFEle = document.getElementById('DegreeF');
DegreeFEle.addEventListener('change',degCtoF);
const DegreeCEle = document.getElementById('DegreeC');
DegreeCEle.addEventListener('change',degFtoC);
function degCtoF(){
// alert('Sushma');
    const units = 'imperial';
    checkWeather(inputIdEle.value,units);
    console.log('Functional call in conversion',units);

}
function degFtoC(){
    // alert('soujanya');
    const units = 'metric';
    checkWeather(inputIdEle.value,units);
    console.log('Functional call in conversion',units);

}
checkWeather(inputIdEle.value,'metric');