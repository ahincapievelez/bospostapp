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
