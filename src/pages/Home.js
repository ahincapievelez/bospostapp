import { useState, useEffect } from "react";
import { topUsnews, topManews, mostReadnews, opinionNews } from "../data"
import NewsList from "../components/NewsList";
import Mostread from "../components/Mostread";
import TopMass from "../components/TopMass";
import Opinion from "../components/Opinion";
import Carousel from "../components/Carousel";

function Home() {

    let [newsData, setNewsData] = useState(null)
    let [mostData, setMostData] = useState(null)
    let [topMaData, setTopMaData] = useState(null)
    let [opinionData, setOpinionData] = useState(null)

    useEffect(() => {
      getNews()
      getMostRead()
      getTopMa()
      getOpinionNews()
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

    async function getOpinionNews() {

      let data = await  opinionNews();

      let topOpinionComponent = data.articles.map((article) => {
        return (
          <Opinion
            key={crypto.randomUUID()}
            title={article.title}
            description={article.description}
          />
        );
      });

      setOpinionData(topOpinionComponent);
  }

    return (
        <div className="container">
            <div className="row">

                <div className="left-column col-8">

                    {/**** Top 4 news in US ****/}
                    <div className="left-column-top row align-items-center">
                        <div className="brk-news col-4">
                            <h1 className="main-title">BREAKING</h1>
                            {newsData}
                        </div>
                        
                        <div className="slider col-8">
                          <div className="row">
                            <div className="col">
                              <div className="carousel slide carousel-fade" id="news-slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                  <Carousel />
                                </div>

                                {/* Button Controlls */}
                                <button className="carousel-control-prev" type="button" data-bs-target="#news-slider" data-bs-slide="prev">
                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#news-slider" data-bs-slide="next">
                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </button>

                                {/* Button Controlls */}
                                <div className="carousel-indicators">
                                  <button className="active" type="button" data-bs-target="#news-slider" data-bs-slide-to="0" aria-label="Slide1"></button>
                                  <button className="" type="button" data-bs-target="#news-slider" data-bs-slide-to="1" aria-label="Slide2"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>

                    {/**** Top 4 news in US ****/}
                    <h1 className="main-title">TOP NEWS IN MA</h1>
                    <div className="left-column-middle row row-cols-3 justify-content-evenly">
                        {topMaData}
                    </div>

                </div>

                <div className="right-column col">
                    <div className="top-row row">
                        <div className="top-col col">
                            <h1>MOST READ ON BOSTONIAN POST</h1>
                            <div className="line"></div>
                            {mostData}
                        </div>
                    </div>
                    <div className="bottom-row row">
                        <div className="bottom-col col">
                            <h1 className="main-title">OPINION</h1>
                            {opinionData}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Home;