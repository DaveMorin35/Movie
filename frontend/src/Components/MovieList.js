import React, {useEffect, useState} from "react";
import axios from 'axios';


const MovieList = ({handleRegisterForm, handleLoginForm}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get('http://localhost:8080/movies');
                setMovies(response.data.results);
            } catch (e) {
                console.error("Error fetching movies", e);
            }
        }
        fetchMovie();
    }, []);

    const truncateTitle = (title, maxlength) => {
        return title.length > maxlength ? title.substring(0, maxlength) + "..." : title;
    }


    return (
        <>
            <div className="bg-gradient-to-r from-blue-950 to-blue-800  py-2.5">
                <div className="flex justify-center text-4xl pt-2.5 uppercase text-neutral-400 font-bold">
                    <h2>Movie Database</h2>
                </div>
                <div className="flex justify-end mr-10">
                    <button
                        className=" border-2 p-2 rounded-lg text-neutral-400"
                        onClick={handleRegisterForm}
                    >Register
                    </button>
                    <button
                        className=" border-2 p-2 rounded-lg text-neutral-400"
                        onClick={handleLoginForm}
                    >Login
                    </button>
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
                            <li className="mt-2" key={index}>{truncateTitle(movie.title, 18)}</li>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default MovieList;