import { Link } from "react-router-dom"

function Opinion({ title, description}) {

    return (
        <div className="topmass-list row">
            <div className="col">
                <h1 className="title"><Link className="link-article" to={`/news/${title}`}>{title}</Link></h1>
                <p className="description">{description}</p>
                <div className="opinion-line"></div>
            </div>
        </div>
    );
  }
  
  export default Opinion;