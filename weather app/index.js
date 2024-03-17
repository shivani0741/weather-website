var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "8b51160bfa3756f2e087c6983c6bb915";

function convertion(val) {
    return (val - 273.15).toFixed(3); // Convert Kelvin to Celsius and round off to 3 decimal points
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description']; // Access description properly
            var temperature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            // Send the data to HTML
            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
            wind.innerHTML = `Wind speed: <span>${wndspeed}</span>`; // Fix placeholder

        })
        .catch(err => alert('You Entered Wrong City Name')); // Detect error in city
});
