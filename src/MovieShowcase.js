import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return (
      <div>
        {movieData.map(({ title, IMDBRating, genres, poster }, index) => {
          return (
            <MovieCard
              key={index}
              title={title}
              IMDBRating={IMDBRating}
              genres={genres}
              poster={poster}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
