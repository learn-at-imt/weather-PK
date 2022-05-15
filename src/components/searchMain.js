import { useEffect, useState } from "react";
import "../components/style.css";
import WeatherDetails from "./WeatherDetails";

const SearchMain = () => {
  const [searchItem, setSearchItem] = useState("accra");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchItem}&units=metric&appid=ad264b96c719ba36aaa442df779a6d80`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="city name.."
            id="search"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <button className="searchButton" onClick={getWeatherInfo}>
            Search{" "}
          </button>
        </div>
      </div>
      {/*This is the weather details page*/}
      <WeatherDetails {...tempInfo} />
    </>
  );
};

export default SearchMain;
