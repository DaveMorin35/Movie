import React, {useEffect, useState} from "react";
import axios from 'axios';


const MovieList = () => {
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

    return (
        <>
            <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 py-2.5">
                <div className="flex justify-center text-4xl pt-2.5 uppercase">
                    <h2>Movie Database</h2>
                </div>
                <div className="grid grid-cols-4 gap-3 mt-10 place-items-center">
                    {movies.map((movie, index) => (
                        <div className="text-grey-700 list-none text-center">
                            <img
                                className="max-h-56 max-w-xs rounded-lg"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <li key={index}>{movie.title}</li>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default MovieList;