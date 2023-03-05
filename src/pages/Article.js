// import { useParams } from "react-router-dom";

function Article({ title, description}) {

    return (
        <div className=" row">
            <div className="col">
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
                <div className="opinion-line"></div>
            </div>
        </div>
    );
  }
  
  export default Article;