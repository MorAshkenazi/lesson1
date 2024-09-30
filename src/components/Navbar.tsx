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
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Navbar;
