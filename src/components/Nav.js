import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; 
import { weather } from "../data";

function Nav(props) {

  let [temp, setTemp] = useState(null);
  let [city, setCity] = useState(null);

  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather() {
    let data = await weather();
    let temp = data.main.temp;
    let city = data.name
    // let icon = data.weather[0].icon;
    // let imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

    setTemp(temp)
    setCity(city)
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let date = new Date();
  let year = date.getFullYear();
  let month = months[date.getMonth()];
  let day = days[date.getDay()];
  console.log(date.getDay())

  let fullDate = day + ", " + month + " " + date.getDate() + ", " + year;
  console.log(fullDate);
  
  return (
    <div className="container">

      <div className="row">
        <div className="col-4 align-self-end">
          <h1 className="date">{fullDate}</h1>
        </div>

        <div className="col-4">
          <Link to="/">
          <img className="logo" src="logo.png" alt="Bostonian Post"/>
          </Link>
        </div>

        <div className="col-4 align-self-end">
          <div className="row">
            <div className="temp col">
              <h1 className="temp-txt">{city}, {temp} °F</h1>
            </div>
          </div>
        </div>

      </div>

      <div className="row nav">
        <div className="col nav-title">
          <Link to="/">
            <div>Home</div>
          </Link>
        </div>

        <div className="col">
          <Link to="/about">
            <div>About</div>
          </Link>
        </div>

        <div className="login col-2 align-self-end">
          <Link to="/login">
            <h1 className="login-txt">Log In</h1>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Nav;