function Carousel() {

    return (
      <div>
        <div className="carousel-item active" data-bs-interval="5000">
            <div className="carousel-caption" data-bs-interval="5000">
                <h5 className="slider-title">Article Title</h5>
                <p className="slider-paragh">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate justo a erat sodales sagittis.</p>
            </div>
          <img className="img-fluid" src="img1.jpg" alt="hello" />
        </div>
        <div className="carousel-item">
            <div className="carousel-caption" data-bs-interval="5000">
                <h5 className="slider-title">Article Title</h5>
                <p className="slider-paragh">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate justo a erat sodales sagittis.</p>
            </div>
          <img className="img-fluid" src="img2.jpg" alt="hello" />
        </div>
      </div>
    );
  }
  
  export default Carousel;