import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
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
  );
}

export default Nav;