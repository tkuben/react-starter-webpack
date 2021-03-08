import React from "react";
import style from "./app.scss";
import './axios.js';

import Users from './Components/users';
import SocialLogin from './Components/social-login';

const App = () => {
  return (
  <div className={style.app}>
    <SocialLogin />
    <Users />
  </div>);
}; 

export default App;
