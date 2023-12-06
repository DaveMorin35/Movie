import './App.css';
import MovieList from "./Components/MovieList";
import React, {useState} from "react";
import Form from "./Components/Form";

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (

  <>
    {showLoginForm ? (<Form handleCloseForm={() => setShowLoginForm(false)}/> ):(
    <MovieList handleLoginForm={() => setShowLoginForm(true)} />)}

  </>

  );
};

export default App;
