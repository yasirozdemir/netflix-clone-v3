import "./App.css";
import "./MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import GenreBar from "./components/GenreBar";
import MovieCarousel from "./components/MovieCarousel";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GenreBar />
                <MovieCarousel moviesToShow="Sherlock Holmes" />
                <MovieCarousel moviesToShow="Harry Potter" />
                <MovieCarousel moviesToShow="The Lord of the Rings" />
              </>
            }
          />
          <Route element={<h1>TV Shows</h1>} path="/tvshows" />
          <Route element={<MovieDetails />} path="/moviedetails/:movieID" />
          <Route element={<h1>404 Page Not Found</h1>} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
