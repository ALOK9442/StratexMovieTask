import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MovieList() {
  const API_URL = "https://dummyapi.online/api/movies";

  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(API_URL);
      const sortedMovies = response.data.sort((a, b) => b.rating - a.rating);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-4">
      <div className="flex w-[100%] justify-between">
        <h1 className="text-3xl font-bold mb-4">Movie List</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white shadow-md rounded-lg overflow-hidden shadow-white"
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
                className={`mt-2 px-4 py-2 rounded ${
                  favorites.some((fav) => fav.id === movie.id)
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {favorites.some((fav) => fav.id === movie.id)
                  ? "Unfavorite"
                  : "Favorite"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
