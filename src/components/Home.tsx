import { FunctionComponent } from "react";

interface HomeProps {
  username: string;
}

const Home: FunctionComponent<HomeProps> = ({ username }) => {
  const welcomeHandler = () => {
    console.log("Welcome Mor");
  };
  const welcomeHandler2 = (username: string) => {
    console.log("Welcome" + username);
  };

  return (
    <>
      <h1>Home page</h1>
      <button className="btn btn-danger" onClick={welcomeHandler}>
        Welcome
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => welcomeHandler2(username)}
      >
        Welcome2
      </button>
    </>
  );
};

export default Home;
