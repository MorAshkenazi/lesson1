import { FunctionComponent } from "react";

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  const handleInput = (newInput: string) => {
    console.log(newInput);
  };
  return (
    <>
      <label htmlFor="username">Enter username:</label>
      <input
        type="text"
        id="username"
        onChange={(e) => handleInput(e.target.value)}
      />
    </>
  );
};

export default Details;
