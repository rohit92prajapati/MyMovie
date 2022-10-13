import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import MovieCard from "./Components/MovieCard";
import MovieDetails from "./Components/MovieDetails";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <div>
              {" "}
              <Header />
              <Home />
              <Footer />
            </div>
          }
        />
        <Route
          path="/moviedetails/:imdbID"
          element={
            <div>
              {" "}
              <Header />
              <MovieDetails />
              <Footer />
            </div>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/signup"
          element={
            <div>
              {" "}
              <Header />
              <SignUp />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
