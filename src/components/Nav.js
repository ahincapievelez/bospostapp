import { Link } from "react-router-dom";

function Nav(props) {
  
  return (
    <div className="container">

      <div className="row">
        <div className="col-12">
          <Link to="/">
          <img className="logo col-2" src="logo.png" alt="Bostonian Post"/>
          </Link>
        </div>
      </div>

      <div className="row nav">
        <div className="col nav-title">
          <Link to="/">
            <div>Home</div>
          </Link>
        </div>

        <div className="col nav-title">
          <Link to="/about">
            <div>About</div>
          </Link>
        </div>

        <div className="col nav-title">
          <Link to="/sports">
            <div>Sports</div>
          </Link>
        </div>

        <div className="col nav-title">
          <Link to="/business">
            <div>Business</div>
          </Link>
        </div>

        <div className="col">
          <Link to="/tech">
            <div>Technology</div>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Nav;