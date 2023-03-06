import { useParams } from "react-router-dom";

function Article() {

    let { title, content } = useParams()

    return (
        <div className="container">
            <div className=" row">
                <div className="col">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Article;