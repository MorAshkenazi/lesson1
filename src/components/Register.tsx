import { FormEvent, FunctionComponent, useState } from "react";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  let [email, setEmail] = useState<string>("test@test.com");
  let [password, setPassword] = useState<string>("");

  let handleRegister = (e: FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <>
      <h2 className="text-dark">REGISTER</h2>
      <form className="text-start" onSubmit={handleRegister}>
        <label htmlFor="email">Email:</label>
        <input
          className="form-control w-50"
          type="email"
          id="email"
          autoComplete="off"
          placeholder="example@example.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password:</label>
        <input
          className="form-control w-50"
          type="password"
          id="password"
          autoComplete="off"
          placeholder="margol123"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className="btn btn-dark mt-2">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
