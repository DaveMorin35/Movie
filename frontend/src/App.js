import './App.css';
import MovieList from "./Components/MovieList";
import React, {useState} from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";

const App = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegistrationForm, setShowRegisterForm] = useState(false);
    const [token, setToken] = useState(null);
    const [loginName, setLoginName] = useState("");
    const [showLoginName, setShowLoginName] = useState(false)

    return (
        <>
            {showRegistrationForm ? (
                <Register handleCloseForm={() => setShowRegisterForm(false)}/>
            ) : showLoginForm ? (
                <Login handleCloseForm={() => setShowLoginForm(false)} setLoginName={setLoginName} setToken={setToken} setShowLoginName={setShowLoginName}/>
            ) : (
                <MovieList
                    handleLoginForm={() => setShowLoginForm(true)}
                    handleRegisterForm={() => setShowRegisterForm(true)}
                    loginName={loginName}
                    showLoginName={showLoginName}
                />
            )}
        </>
    );
}

export default App;
