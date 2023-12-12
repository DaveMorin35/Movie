import './App.css';
import MovieList from "./Components/MovieList";
import React, {useState} from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import User from "./Components/User";


const App = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegistrationForm, setShowRegisterForm] = useState(false);
    const [loginName, setLoginName] = useState("");
    const [showLoginName, setShowLoginName] = useState(false)
    const [token, setToken] = useState(null);
    const [showUserInfo, setShowUserInfo] = useState(false);

    const handleLogoutForm = () => {
        setLoginName("")
        setShowLoginName("")
        setToken(null)
    }

console.log(showUserInfo)
    return (
        <>
            {showRegistrationForm ? (
                <Register handleCloseForm={() => setShowRegisterForm(false)}/>
            ) : showLoginForm ? (
                <Login handleCloseForm={() => setShowLoginForm(false)} 
                setLoginName={setLoginName} 
                setShowLoginName={setShowLoginName} 
                handleLogoutForm={handleLogoutForm}
                setToken={setToken}
                />
            ) : (
                <MovieList
                    handleLoginForm={() => setShowLoginForm(true)}
                    handleRegisterForm={() => setShowRegisterForm(true)}
                    loginName={loginName}
                    showLoginName={showLoginName}
                    handleLogoutForm={handleLogoutForm}
                    setShowUserInfo={setShowUserInfo}
                />
            )}
            {showUserInfo && <User token={token}/>}
        </>
    );
}

export default App;
