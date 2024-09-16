import { FunctionComponent } from "react";

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
      <a
        href="/"
        className="me-2 text-decoration-none"
        style={{ backgroundColor: "yellow", color: "red" }}
      >
        Home
      </a>
      <a href="/contacts">Contacts</a>
    </div>
  );
};

export default Navbar;
