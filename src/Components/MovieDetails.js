import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { fetchAsyncMovieDetails,removeDetails } from '../redux/movieslice'
import Typography from '@mui/material/Typography'

export default function MovieDetails() {
  const {imdbID}=useParams()
  console.log('paramid',imdbID)
  const dispatch=useDispatch()
  const movieDetailsData=useSelector(state=>state.movie.movieDetails)
  console.log('DetailsData',movieDetailsData)
  useEffect(()=>{
          dispatch(fetchAsyncMovieDetails(imdbID))
          return()=>{
              dispatch(removeDetails())
          }
  },[imdbID,dispatch])
  return (
    <div className='flex justify-items-center px-10 my-10'>
      <div className='left flex flex-col flex-auto w-64 space-y-4'>
      <Typography variant="h3" gutterBottom>
       {movieDetailsData.Title}
      </Typography>
      <div className='colDetails flex'>
        <p className=''>IMDB Rating</p>
        <span className="material-symbols-outlined">
auto_awesome
</span>
<p className='mr-6'>:   {movieDetailsData.imdbRating}</p>



        <p>IMDB Votes</p>
        <span class="material-symbols-outlined">
recommend
</span>
<p className='mr-6'>:   {movieDetailsData.imdbVotes}</p>


        <p>Runtime </p>
        <span class="material-symbols-outlined">
movie
</span>
<p className='mr-6'>:   {movieDetailsData.Runtime}</p>

        <p>Year</p>
        <span class="material-symbols-outlined">
calendar_month
</span>
<p className='mr-6'>:   {movieDetailsData.Year}</p>
      </div>

    
      <Typography variant="body1" gutterBottom>
       {movieDetailsData.Plot}
      </Typography>

      <div className='director'>
        <p>Director  : {movieDetailsData.Director}</p>
      </div>

      <div className='stars'>
        <p>Stars  : {movieDetailsData.Actors}</p>
      </div>

      <div className='generes'>
        <p>Generes  : {movieDetailsData.Genre}</p>
      </div>


      <div className='language'>
        <p>Language  : {movieDetailsData.Language}</p>
      </div>
      <div className='awards'>
        <p>Awards  : {movieDetailsData.Awards}</p>
      </div>


      </div>

     
      <div className='right flex-auto w-32 self-center p-10 '>
        <img src={movieDetailsData.Poster} className="w-80 h-72 rounded"/>
      </div>

    </div>
  )
}
