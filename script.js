window.addEventListener("load", ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(
        ".temperature-description"
    );
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector("location-timezone");

    if temperatureSection = document.querySelector('temperature-section');

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
        
            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&units=imperial&appid=dab89ebf624e691e71f4b833affc641e'`;
        
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data => {
                console.log(data);
                const { temperature, summary } = data.currently;
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;

                temperatureSection.addEventListener('click', () => {
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C";
                        temperatureDegree.textContent = celsius;
                    } else {
                        temperatureSpan.textContent = "F";
                    }
                });
            });
        });
    }
});
