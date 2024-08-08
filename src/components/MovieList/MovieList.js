import { useContext } from "react";
import MovieListItem from "../MovieListItem/MovieListItem";
import "./MovieList.css";
import { Context } from "../../context/context";
import { filterHandle } from "../utilities/data";
import { searchHandler } from "../utilities/data";

const MovieList = () => {
  const { state, dispatch } = useContext(Context);

  const movieData = filterHandle(
    searchHandler(state.movieData, state.term),
    state.filter
  );

  return (
    <ul className="movie-list">
      {movieData.map((movie) => (
        <MovieListItem key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;
