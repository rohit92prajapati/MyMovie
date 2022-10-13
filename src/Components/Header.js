import React, { useEffect, useState } from "react";
import { fetchAsyncSearchMovie, addMovieType } from "../redux/movieslice";
import { useDispatch } from "react-redux";
import Switch from "@mui/material/Switch";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { Link } from "react-router-dom";

export default function Header() {
  const [checked, setChecked] = React.useState(true);
  useEffect(() => {
    checked
      ? dispatch(addMovieType("movie"))
      : dispatch(addMovieType("series"));
  }, [checked]);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const searchMovie = (e) => {
    e.preventDefault();
    console.log("search", search);
    dispatch(fetchAsyncSearchMovie(search));
  };

  console.log("stateswitch", checked);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          We-Movies
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                SignUp
              </a>
            </li>
          </ul>
          {checked ? (
            <p className="text-white">MOVIE</p>
          ) : (
            <p className="text-white">SHOWS</p>
          )}
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <form className="d-flex">
            <input
              className="form-control me-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              onClick={searchMovie}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
