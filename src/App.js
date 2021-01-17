import logo from './logo.svg';
import './App.css';
import React from "react";
import FullName from "./Component/Profile/FullName";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import Address from "./Component/Profile/Address";
import "./Component/Profile/style.css"


function App() {
  return (
    <div className="container">

      <ProfilPhoto></ProfilPhoto>
      <FullName></FullName>
      <Address></Address>
      
    </div>
  );
}

export default App;