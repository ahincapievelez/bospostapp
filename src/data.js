export async function news() {

    let newsData;
    const key = process.env.REACT_APP_KEY
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;

    try {
      let response = await fetch(url);
      newsData = await response.json();
      console.log(newsData)
    } catch (error) {
      console.log(error);
    }

    return newsData
}


