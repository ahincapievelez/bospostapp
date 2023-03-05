import { Link } from "react-router-dom"

function Carousel({ content, title, urlImage, author }) {

    return (
      <div>
        <div className="carousel-item active" data-bs-interval="5000">
            <div className="carousel-caption" data-bs-interval="5000">
                <h5 className="slider-title"><Link className="link-article-light" to={`/news/${title}`}>{title}</Link></h5>
                <p className="slider-paragh">{author}</p>
            </div>
          <img className="img-fluid" src={urlImage} alt="hello" />
        </div>
      </div>
    );
  }
  
  export default Carousel;