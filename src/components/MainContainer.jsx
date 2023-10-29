import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import SecondaryContainer from './SecondaryContainer';


const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return; //also known as early return(returning when movies aren't present)
    const mainMovie = movies[0];
    
    const {original_title, overview,id} = mainMovie;
  return (
    <div>
    <VideoTitle title={original_title} overview={overview} movieId={id}/>
    <VideoBackground movieId={mainMovie.id}/>
    <SecondaryContainer/>
    </div>
  )
}

export default MainContainer