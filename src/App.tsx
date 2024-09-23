import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Details from "./components/Details";
import Message1 from "./components/Message1";
import Message2 from "./components/Message2";
import Message3 from "./components/Message3";
import Products from "./components/Products";
import Users from "./components/Users";
import Photos from "./components/Photos";

function App() {
  let myName: string = "Mor";
  let age: number = 20;
  let animalUrl: string =
    "https://c02.purpledshub.com/uploads/sites/62/2018/06/GettyImages-524909101-4ccfcfa.jpg?webp=1&w=1200";
  let username: string = "Margol";
  let lastLogin: string = "16.9.24";
  return (
    <div className="App">
      <Navbar user={username} lastLogin={lastLogin} />
      {/* <Home username={username} /> */}
      <Details />
      <Users />
      <Photos />
      {/* <Message1 isAdmin={true} />
      <Message2 isAdmin={true} />
      <Message3 isAdmin={false} />
      <Products /> */}
      {/* <h1>{myName}</h1>
      <p>Hello from App component</p>
      <img src={animalUrl} alt="cute giraffe" />
      <div>Animal age is {age + 10}</div>
      <p>{Math.floor(Math.random() * 100)}</p> */}
      <Footer developerName={myName} />
    </div>
  );
}

export default App;
