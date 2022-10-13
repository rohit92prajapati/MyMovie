import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MovieCard(probs) {
  return (
    <Card
      sx={{ maxWidth: 250 }}
      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300"
    >
      <img src={probs.cardData.Poster} className="h-60 w-96" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {probs.cardData.Title.slice(0, 35)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {probs.cardData.Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          className="bg-slate-500 p-2 rounded hover:text-white"
          to={`/moviedetails/${probs.cardData.imdbID}`}
        >
          Read More
        </Link>
      </CardActions>
    </Card>
  );
}
