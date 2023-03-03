function NewsList( {author, content, description, date, title, urlImage} ) {

    return (
        <div className="row news-list">
            <div className="col-12">
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
            </div> 
            {/* <div className="col-6">
                <img className="image" src={urlImage} alt={title} />
            </div> */}
        </div>
    );
  }
  
  export default NewsList;