import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieapi from "../api/movieapi";
import { apiKey } from "../api/movieapikey";

export const fetchAsyncMovie = createAsyncThunk(
  "movie/fetchAsyncMovie",
  async (moviety) => {
    const response = await movieapi
      .get(`?apikey=${apiKey}&s=Harry&type=${moviety}`)
      .catch((err) => console.log("Error", err));
    console.log("Response:", response);
    return response.data;
  }
);
// export const fetchAsyncShow = createAsyncThunk(
//   "movie/fetchAsyncShow",
//   async () => {
//     const response = await movieapi
//       .get(`?apikey=${apiKey}&s=Harry&type=series`)
//       .catch((err) => console.log("Error", err));
//     console.log("Response:", response);
//     return response.data;
//   }
// );
export const fetchAsyncMovieDetails = createAsyncThunk(
  "movie/fetchAsyncMovieDetails",
  async (id) => {
    const response = await movieapi
      .get(`?apikey=${apiKey}&i=${id}&plot=full`)
      .catch((err) => console.log("Error", err));
    console.log("Response:", response);
    return response.data;
  }
);
export const fetchAsyncSearchMovie = createAsyncThunk(
  "movie/fetchAsyncSearchMovie",
  async (movieName = "Harry") => {
    const response = await movieapi
      .get(`?apikey=${apiKey}&s=${movieName}&type=movie`)
      .catch((err) => console.log("Error", err));
    console.log("Response:", response);
    return response.data;
  }
);

const initialState = {
  movie: [],
  show: [],
  movieDetails: [],
  searchMovie: [],
  removeDetails: [],
  movieType: "movie",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movie = action.payload;
    },
    addShow: (state, action) => {
      state.show = action.payload;
    },
    movieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    searchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
    removeDetails: (state, action) => {
      state.removeDetails = {};
    },
    addMovieType: (state, action) => {
      state.movieType = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovie.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovie.fulfilled]: (state, action) => {
      console.log("successfull");
      return { ...state, movie: action.payload };
    },
    [fetchAsyncMovie.rejected]: () => {
      console.log("rejected");
    },
    // [fetchAsyncShow.fulfilled]: (state, action) => {
    //   console.log("successfull");
    //   return { ...state, show: action.payload };
    // },
    [fetchAsyncMovieDetails.fulfilled]: (state, action) => {
      console.log("successfull");
      return { ...state, movieDetails: action.payload };
    },
    [fetchAsyncSearchMovie.fulfilled]: (state, action) => {
      console.log("successfull");
      return { ...state, searchMovie: action.payload };
    },
  },
});

export const { addMovie, removeDetails, movieType, addMovieType } =
  movieSlice.actions;
export const getAllMovie = (state) => state.movie.movie;
export default movieSlice.reducer;
