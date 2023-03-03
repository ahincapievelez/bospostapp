import { useState, useEffect } from "react";
import { topUsnews, topManews, mostReadnews } from "../data"
import NewsList from "../components/NewsList";
import Mostread from "../components/Mostread";
import TopMass from "../components/TopMass";

function Home() {

    let [newsData, setNewsData] = useState(null)
    let [mostData, setMostData] = useState(null)
    let [topMaData, setTopMaData] = useState(null)

    useEffect(() => {
      getNews()
      getMostRead()
      getTopMa()
    }, []);
  
    async function getNews() {

      let data = await topUsnews('us');

      let newListComponent = data.articles.map((article) => {
        return (
          <NewsList
            key={crypto.randomUUID()}
            author={article.author}
            content={article.content}
            description={article.description}
            date={article.publishedAt}
            title={article.title}
            urlImage={article.urlToImage}
          />
        );
      });

      setNewsData(newListComponent);
    }

    async function getMostRead() {

        let data = await mostReadnews('general');
  
        let mostReadComponent = data.articles.map((article) => {
          return (
            <Mostread
              key={crypto.randomUUID()}
              title={article.title}
            />
          );
        });
  
        setMostData(mostReadComponent);
    }

    async function getTopMa() {

        let data = await topManews('massachusetts');
  
        let topMassComponent = data.articles.map((article) => {
          return (
            <TopMass
              key={crypto.randomUUID()}
              title={article.title}
              description={article.description}
            />
          );
        });
  
        setTopMaData(topMassComponent);
    }

    return (
        <div className="container">
            <div className="row">

                <div className="left-column col-8">

                    {/**** Top 4 news in US ****/}
                    <div className="left-column-top row">
                        <div className="brk-news col-4">
                            <h1 className="main-title">BREAKING</h1>
                            {newsData}
                        </div>
                        <div className="slider col-8 slider">
                            <div>Slider</div>
                        </div>
                    </div>

                    {/**** Top 4 news in US ****/}
                    <h1 className="main-title">TOP NEWS IN MA</h1>
                    <div className="left-column-middle row row-cols-3">
                        {topMaData}
                    </div>

                    {/**** Top 4 news in US ****/}
                    <div className="left-column-bottom row">Bottom</div>

                </div>

                <div className="right-column col">
                    <div className="top-row row">
                        <div className="top-col col">
                            <h1>MOST READ ON BOSTONIAN POST</h1>
                            <div className="line"></div>
                            {mostData}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Home;