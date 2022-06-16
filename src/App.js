import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./signup/page/Signup";
import Login from "./login/page/Login";
import Homepage from "./Welcome/welcome";

//import Welcome from './Welcome/welcome.js';

const App = () => {
  const [user, setLogInUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/login"
            element={<Login setLogInUser={setLogInUser} />}
          />
          <Route path="/register" element={<Signup />} />
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Homepage />
              ) : (
                <Login setLogInUser={setLogInUser} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
