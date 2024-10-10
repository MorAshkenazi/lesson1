import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  user: string;
  lastLogin: string;
}

const Navbar: FunctionComponent<NavbarProps> = ({ user, lastLogin }) => {
  return (
    <div>
      <h4>
        Welcome {user}, logged in {lastLogin}
      </h4>
      <NavLink className="me-3" to="/">
        Home
      </NavLink>
      <NavLink className="me-3" to="/products">
        Products
      </NavLink>
      <NavLink className="me-3" to="/users">
        Users
      </NavLink>
      <NavLink className="me-3" to="/register">
        Register
      </NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Navbar;
