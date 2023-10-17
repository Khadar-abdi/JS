const ApiKey = "68988a0d27469be559774cbf1c427811";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let InputCity = document.getElementById('InputCity');
let search = document.getElementById('search');

async function fetchData(city) {
    const Respone = await fetch(ApiUrl + city + `&appid=${ApiKey}`);


    let Data = await Respone.json();
    console.log(Data)
    document.getElementById('error').textContent = Data.message;


    document.getElementById("city").textContent = Data.name;
    document.getElementById("wind").textContent = Math.round(Data.wind.speed) + ' Km/h';
    document.getElementById("temp").textContent = Math.round(Data.main.temp) + "°C";
    document.getElementById("humm").textContent = Data.main.humidity + ' %';


    const hours = new Date().getHours()

    if (now > 6 && now < 18) {
        document.getElementById("tempIcon").src = "Img/sun_30px.png";
        console.log("malin");


    } else {
        document.getElementById("tempIcon").src = "Img/night_50px.png";
        console.log("habeen");
    }


}

search.addEventListener('click', () => {
    fetchData(InputCity.value)
    InputCity.value = "";
})
const now = new Date().getHours()


// const hours = new Date().getHours()
// const isDayTime = hours > 6 && hours < 18;
// if (isDayTime === true) {
//     console.log('day');
// } else {
//     console.log('night');
// }