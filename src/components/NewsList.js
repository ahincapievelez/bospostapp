import { Link } from "react-router-dom"

function NewsList(  { content, description, date, title } ) {

    return (
        <div className="row news-list">
            <div className="col-12">
                <h1 className="title"><Link className="link-article" to={`/news/${title}/${content}$`}>{title}</Link></h1>
                <p className="description">{description}</p>
            </div> 
        </div>
    );
  }
  
  export default NewsList;