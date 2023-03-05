//** 3 Top news **/
export async function topUsnews(q) {

    let newsData;
    const key = process.env.REACT_APP_KEY
    let url = `https://newsapi.org/v2/everything?q=${q}&sortBy=relevancy&pageSize=3&language=en&apiKey=${key}`;

    try {
      let response = await fetch(url);
      newsData = await response.json();
      console.log(newsData)
    } catch (error) {
      console.log(error);
    }

    return newsData
}

export async function topManews(city) {

  let newsData;
  const key = process.env.REACT_APP_KEY
  let url = `https://newsapi.org/v2/everything?q=${city}&sortBy=relevancy&pageSize=3&language=en&apiKey=${key}`;

  try {
    let response = await fetch(url);
    newsData = await response.json();
    console.log(newsData)
  } catch (error) {
    console.log(error);
  }

  return newsData
}

export async function mostReadnews(category) {

  let newsData;
  const key = process.env.REACT_APP_KEY
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=10&apiKey=${key}`;

  try {
    let response = await fetch(url);
    newsData = await response.json();
    console.log(newsData)
  } catch (error) {
    console.log(error);
  }

  return newsData
}

export async function opinionNews() {

  let newsData;
  const key = process.env.REACT_APP_KEY
  let url = `https://newsapi.org/v2/everything?q=opinion&sortBy=relevancy&pageSize=2&language=en&apiKey=${key}`;

  try {
    let response = await fetch(url);
    newsData = await response.json();
    console.log(newsData)
  } catch (error) {
    console.log(error);
  }

  return newsData
}

export async function weather() {

  let weatherData;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Boston,us&appid=4c4a8380508c4fb894551d1c04f61454&units=imperial`;

  try {
    let response = await fetch(url);
    weatherData = await response.json();
    console.log(weatherData)
  } catch (error) {
    console.log(error);
  }

  return weatherData
}
