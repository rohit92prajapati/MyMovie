import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncSearchMovie, removeDetails } from "../redux/movieslice";
import MovieListing from "./MovieListing";

export default function Home() {
  const [cookies, setCookie] = useCookies(["mymovies"]);
  console.log("cookies", cookies.mymovies);
  localStorage.setItem("cookiesmymovie", cookies.mymovies);

  const movieTypeReduxState = useSelector((state) => state.movie.movieType);
  const dispatch = useDispatch();
  const [validateData, setValidateData] = useState(false);
  useEffect(() => {
    dispatch(fetchAsyncSearchMovie(movieTypeReduxState));
    // dispatch(fetchAsyncShow());
    setValidateData(true);
    return () => {
      dispatch(removeDetails());
    };
  }, [movieTypeReduxState]);
  console.log("movietype", movieTypeReduxState);
  return <div>{validateData ? <MovieListing /> : <h1>No Data Found</h1>}</div>;
}
