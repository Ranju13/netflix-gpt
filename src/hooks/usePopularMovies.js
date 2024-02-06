import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../component/utils/movieSlice";
import { useEffect } from "react";
import { FETCH_OPTIONS } from "../component/utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popular = useSelector(store => store.popular)

    const popularMoviesAPI = async () => {
      try{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', FETCH_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
      } catch(err){
        console.log({err})
      }
    }
  
    useEffect(()=>{
        !popular && 
        popularMoviesAPI()
    }, [])
}

export default usePopularMovies;