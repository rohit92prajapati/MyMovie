import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "./MovieCard";
import { getAllMovie } from "../redux/movieslice";
import { Movie } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MovieListing() {
  const getState = useSelector(getAllMovie);
  const getShow = useSelector((state) => state.movie.searchMovie);
  console.log("state", getShow);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <div className="px-16 py-7 my-20 bg-gradient-to-r from-purple-500 to-pink-500">
      <Slider {...settings}>
        {getShow?.Search?.map((el) => (
          <MovieCard key={el.imdbID} cardData={el} />
        ))}
      </Slider>
    </div>
  );
}
