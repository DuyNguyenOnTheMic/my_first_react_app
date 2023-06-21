import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=8fa9ada3';

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies('stranger');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="stranger"
                    onChange={() => { }}
                />
                <img
                    src={searchIcon}
                    alt="Search"
                    onClick={() => { }}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => {
                            return <MovieCard movie={movie} key={movie.imdbID} />
                        })}
                    </div>
                )
                : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )};
        </div>
    );
};

export default App;