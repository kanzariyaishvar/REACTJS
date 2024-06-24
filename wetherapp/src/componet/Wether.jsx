import { useState } from "react";
import Swal from "sweetalert2";

function Wehter() {
    const [input, setInput] = useState("");
    const [data, setData] = useState(null)
    const key = '83d9354c5a6e630557a9b69c7c66a978'

    console.log(input);

    async function findwether() {
        if (!input) {
            console.log("something Went Wrong...");
            Swal.fire({
                icon: "error",
                title: "Please Enter City...",
                text: "Something went wrong!",
            });
        }
        else {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`;

            try {
                const data = await fetch(url);
                const alldata = await data.json();
                console.log(alldata);
                setData(alldata)
            } catch (error) {
                console.log("Data Fatching Error...");
            }
        }
    }
    // let url = 'https:api.openweathermap.org/data/2.5/weather?q={inputvalue}&appid={83d9354c5a6e630557a9b69c7c66a978}';

    function convertKelvinToCelsius(kelvin) {
        return Math.floor(kelvin - 273.15)
    }

    return (
        <>
            <center>
                <div class="weather-app">
                    <div class="container">
                        <h1>My Weather App</h1>
                        <div class="search-box">
                            <input type="text" id="cityInput" placeholder="Enter city name" onChange={(e) => setInput(e.target.value)} className="form-control" />
                            <button onClick={findwether}>Search</button>
                        </div>
                    </div>
                </div>
                <div class="weather-info" id="weatherInfo">
                    {
                        data && (
                            <>
                                <div className="myinput"><h3>City Name</h3><p>{data.name}</p></div>
                                <div className="myinput"><h3>country</h3><p>{data.sys.country}</p></div>
                                <div className="myinput"><h3>Wind Speed</h3><p>{data.wind.speed}</p>M/S</div>
                                <div className="myinput"><h3>Temperature</h3><p>{convertKelvinToCelsius(data.main.temp)}</p>°C</div>
                            </>
                        )
                    }
                </div>
            </center>
        </>
    )
}

export default Wehter;