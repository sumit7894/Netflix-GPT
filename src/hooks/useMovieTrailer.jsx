import { useDispatch} from "react-redux"
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = ()=>{
  const dispatch = useDispatch();
  
  const getMovieVideo = async () =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/507089/videos?language=en-US",API_OPTIONS
    )
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((video)=>video.type === "Trailer");
    
    const trailer = filterData.length ?  filterData[0] : json.results[0];
    console.log("trailer",trailer); 
    dispatch(addTrailerVideo(trailer));   
  }
  useEffect(()=>{
    getMovieVideo();
  },[])
    
}

export default useMovieTrailer;