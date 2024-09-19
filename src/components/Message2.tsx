// && operator
// a && b => a == true && b == true => true
// מתאים למצבים שיש תנאי אבל אין else
import { FunctionComponent } from "react";

interface Message2Props {
  isAdmin: boolean;
}

const Message2: FunctionComponent<Message2Props> = ({ isAdmin }) => {
  return (
    <>{isAdmin && <button className="btn btn-success">Admin panel</button>}</>
  );
};

export default Message2;
