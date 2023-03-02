import { Link } from "react-router-dom";

function Nav(props) {
  
  return (
    <div className="header">
      <div>
        <Link to="/">
        <img className="logo col-2" src="2.png" alt="Bostonian Post"/>
        </Link>
      </div>

      <div className="nav">
        <Link to="/">
          <div className="nav-title">Home</div>
        </Link>
        <Link to="/about">
          <div className="nav-title">About</div>
        </Link>
        <Link to="/sports">
          <div className="nav-title">Sports</div>
        </Link>
        <Link to="/business">
          <div className="nav-title">Business</div>
        </Link>
        <Link to="/tech">
          <div className="nav-title">Technology</div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;