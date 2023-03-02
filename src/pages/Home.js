// import NewsList from "../components/NewsList";

function Home({news}) {
    return (
        <div className="home">
            <div className="home-box">

                <div className="left-column">

                    {/**** Top 4 news in US ****/}
                    <div className="left-column-top">
                        <div>Component News List</div>
                        <div>
                        <img className="img" src="2.png" alt="Bostonian Post"/>
                        </div>
                    </div>

                    {/**** Top 4 news in US ****/}
                    <div className="left-column-middle">Middle</div>

                    {/**** Top 4 news in US ****/}
                    <div className="left-column-bottom">Bottom</div>

                </div>

                <div className="middle-column">Div2</div>

                <div className="right-column">Div3</div>
            </div>
        </div>
    );
  }
  
  export default Home;