import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";

// const App = () => {
//  return (
//     <div className="app-container">
//       <h1>Hello, World!</h1>
//     </div>
//   );}

const App = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!token) {
      setIsLoggedIn(false);
    } else {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, token]);
  return (
    <>
      <Router>
        <NavBar
          token={token}
          setToken={setToken}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <div>
          <Routes>
            <Route path="/login" element={<Login 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
  
  
  export default App;