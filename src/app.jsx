import React from "react";
import style from "./app.scss";

import Users from './Components/users';

const App = () => {
  return (
  <div className={style.app}>
    <h1>Hello World</h1> 
    <Users />
  </div>);
}; 

export default App;
