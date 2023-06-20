import { useEffect } from "react";

import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=8fa9ada3';
const movie1 = {
    "Title": "Stranger Things",
    "Year": "2016–2022",
    "imdbID": "tt4574334",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
};

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
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
                    value="Supperman"
                    onChange={() => { }}
                />
                <img
                    src={searchIcon}
                    alt="Search"
                    onClick={() => { }}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img
                            src={movie1.Poster !== 'N/A' ? movie1.Poster : 'http://via.placeholder.com/400'}
                            alt={movie1.Title}
                        />
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;