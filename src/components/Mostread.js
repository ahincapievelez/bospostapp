import { Link } from "react-router-dom"

function Mostread( { title } ) {

    return (
        <div className="row mostread-list">
            <div className="col-12">
                <h1 className="mostread-title"><Link className="link-article" to={`/news/${title}`}>{title}</Link></h1>
                <div className="line-bottom"></div>
            </div> 
        </div>
    );
  }
  
  export default Mostread;