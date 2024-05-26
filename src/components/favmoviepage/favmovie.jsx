import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../store/slices/movieslice";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleUnfavorite = () => {
    dispatch(removeFavorite(movie.id));
  };

  return (
    <div
      key={movie.id}
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <img
        src={movie.image}
        alt={movie.movie}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{movie.movie}</h2>
        <p className="text-gray-600">Rating: {movie.rating}</p>
        <button
          onClick={handleUnfavorite}
          className="mt-2 px-4 py-2 rounded bg-red-500 text-white"
        >
          Unfavorite
        </button>
      </div>
    </div>
  );
};

const FavoriteMoviesPage = () => {
  const favoriteMovies = useSelector((state) => state.movies.favorites);

  return (
    <div className="p-4">
      <div className="flex w-[100%] justify-between">
        <Link to="/" className="text-3xl font-bold mb-4 border-1 rounded-md shadow-md shadow-white">
          Movie List
        </Link>
        <h2 className="text-3xl font-bold mb-4 border-1 rounded-md shadow-md shadow-white">
          Favorites
        </h2>
      </div>
      <h1 className="text-3xl font-bold mb-4">Favorite Movies List</h1>
      {favoriteMovies.length === 0 ? (
        <p>No favorite movies yet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteMoviesPage;
