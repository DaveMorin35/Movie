import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const username = location.state?.username;
  const showUsername = location.state?.showUsername;
 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get("http://localhost:8080/movies");
        setMovies(response.data.results);
      } catch (e) {
        console.error("Error fetching movies", e);
      }
    };
    fetchMovie();
  }, []);

  const truncateTitle = (title, maxlength) => {
    return title.length > maxlength
      ? title.substring(0, maxlength) + "..."
      : title;
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800  py-2.5">
        <div className="flex justify-center text-4xl pt-2.5 uppercase text-neutral-400 font-bold">
          <Link to="/">
            <h2>Movie Database</h2>
          </Link>
        </div>
        {showUsername && (
        <div>
          <p className="ml-10 text-2xl ">{username} is here!</p>
        </div>
        )}
        <div className="flex justify-end mr-10">
          <Link to="/register">
            <button className=" border-2 p-2 rounded-lg text-neutral-400 mr-10 p-2">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className=" border-2 p-2 rounded-lg text-neutral-400 mr-10 p-2">
              Login
            </button>
          </Link>
          <Link to="/logout">
            <button className=" border-2 p-2 rounded-lg text-neutral-400">
              Logout
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-10 place-items-center ">
          {movies.map((movie, index) => (
            <div className="text-neutral-400 list-none text-center mb-3.5">
              <img
                className="max-h-56 max-w-xs rounded-lg transform transition duration-500
                                hover:scale-110"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <li className="mt-2" key={index}>
                {truncateTitle(movie.title, 18)}
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
