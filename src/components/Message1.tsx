// if statement
import { FunctionComponent } from "react";

interface Message1Props {
  isAdmin: boolean;
}

const Message1: FunctionComponent<Message1Props> = ({ isAdmin }) => {
  if (isAdmin) {
    return (
      <>
        <h4>Welcome back Admin</h4>
        <button>Add products</button>
      </>
    );
  }
  return (
    <>
      <h4>Welcome back User</h4>
      <button>show products</button>
    </>
  );
};

export default Message1;
