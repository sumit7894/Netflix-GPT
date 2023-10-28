import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo);
  useMovieTrailer();
  return (
    <div>
      <iframe width="560" 
      height="315" 
      src={"https://www.youtube.com/embed/"+trailerVideo?.key}
      title="YouTube video player" 
      allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground