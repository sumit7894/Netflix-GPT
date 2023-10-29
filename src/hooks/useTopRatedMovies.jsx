import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const getTopRatedMoves = async () =>{
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
          API_OPTIONS
        )
        const JSON = await data.json();
        dispatch(addTopRatedMovies(JSON.results)); 
        console.log("top rated movies",JSON);
      }
      useEffect(()=>{
        getTopRatedMoves();
      },[])
}
export default useTopRatedMovies;