import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface UserDetailsProps {}

const UserDetails: FunctionComponent<UserDetailsProps> = () => {
  let { id } = useParams();
  let [user, setUser] = useState<any>({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res: Response) => res.json())
      .then((userInfo: any) => setUser(userInfo));
  }, []);

  return (
    <>
      <h2>User {id} Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </>
  );
};

export default UserDetails;
