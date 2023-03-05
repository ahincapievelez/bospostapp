function TopMass( { description, title} ) {

    return (
        <div className="topmass-list col-4">
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
        </div>
    );
  }
  
  export default TopMass;