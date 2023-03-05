import { Link } from "react-router-dom"

function TopMass( { description, title, urlImage} ) {

    return (
        <div className="topmass-list col-4">
            <h1 className="title"><Link className="link-article" to={`/news/${title}`}>{title}</Link></h1>
            <p className="description">{description}</p>
            {/* <img className="img-fluid" src={urlImage} alt={title} /> */}
        </div>
    );
  }
  
  export default TopMass;