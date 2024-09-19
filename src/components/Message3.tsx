// ternary if
// if...else
import { FunctionComponent } from "react";

interface Message3Props {
  isAdmin: boolean;
}

const Message3: FunctionComponent<Message3Props> = ({ isAdmin }) => {
  return (
    <>
      {isAdmin ? (
        <>
          <h4 className="text-danger">Welcome back Admin</h4>
          <button>Add products</button>
        </>
      ) : (
        <>
          <h4 className="text-warning">Welcome back User</h4>
          <button>Show products</button>
        </>
      )}
    </>
  );
};

export default Message3;
