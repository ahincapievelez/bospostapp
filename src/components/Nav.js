import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="container">
      <div>
        <img className="logo col-2" src="2.png" alt="Bostonian Post"/>
      </div>

      <div className="nav container">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/sports">
          <div>Sports</div>
        </Link>
        <Link to="/business">
          <div>Business</div>
        </Link>
        <Link to="/tech">
          <div>Technology</div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;