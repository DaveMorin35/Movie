import './App.css';
import MovieList from "./Components/MovieList";
import React, {useState} from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import {Users} from "./Components/Users";

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegisterForm] = useState(false);
  const [token, setToken] = useState(null)

  return (
      <>
        <Users token={token}/>
        {showRegistrationForm ? (
            <Register handleCloseForm={() => setShowRegisterForm(false)}/>
        ) : showLoginForm ? (
            <Login handleCloseForm={() => setShowLoginForm(false)} setToken={setToken}/>
        ) : (
            <MovieList
                handleLoginForm={() => setShowLoginForm(true)}
                handleRegisterForm={() => setShowRegisterForm(true)}
            />
        )}
      </>
  );
}

  export default App;
