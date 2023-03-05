import { Link } from "react-router-dom"

function NewsList( {author, content, description, date, title, urlImage} ) {

    return (
        <div className="row news-list">
            <div className="col-12">
                <h1 className="title"><Link className="link-article" to={`/news/${title}`}>{title}</Link></h1>
                <p className="description">{description}</p>
            </div> 
        </div>
    );
  }
  
  export default NewsList;