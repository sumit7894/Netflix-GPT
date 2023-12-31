import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies= useSelector(store => store.movies);
  return movies&&(
    <div className='bg-black'>
      <div className='-mt-52 pl-16 relative'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"}   movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
      {/* 
        MovieList - popular
          Movie cards *n
        MovieList - nowPlaying
        MovieList - Trending
        MovieList - Horror
     */}
     
    </div>
  )
}

export default SecondaryContainer