import { FunctionComponent, useEffect, useState } from "react";

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  let [username, setUsername] = useState<string>("David");
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // let username: string = "Adam";
  const handleInput: Function = (newInput: string) => {
    // username = newInput;
    setUsername(newInput);
    console.log(username);
  };

  // execute every render
  useEffect(() => {
    console.log("Details component was rendered");
  });

  // execute in first render
  useEffect(() => {
    console.log("First render");
  }, []);

  // execute in change in specific state/s
  useEffect(() => {
    console.log("Every render related to username state");
    setIsLoggedIn(true);
  }, [username]);

  return (
    <>
      <label htmlFor="username">Enter username:</label>
      <input
        type="text"
        id="username"
        onChange={(e) => handleInput(e.target.value)}
      />
      <p>{username}</p>
    </>
  );
};

export default Details;
