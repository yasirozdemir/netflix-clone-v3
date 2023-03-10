import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Spinner,
  Alert,
} from "react-bootstrap";

const MovieDetails = () => {
  const params = useParams();
  const movieID = params.movieID;

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const url = "http://www.omdbapi.com/?apikey=83cb8cba&i=";

  const fetchMovieToShow = async () => {
    try {
      const response = await fetch(url + movieID);
      if (response.ok) {
        const rawMovie = await response.json();
        setMovie(rawMovie);
        setIsLoading(false);
      } else {
        console.log("error");
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchMovieToShow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieID]);

  return (
    <>
      <Container>
        {isLoading && <Spinner animation="border" role="status"></Spinner>}
        {isError && (
          <Alert variant="danger">
            Something went wrong loading details of {movie.Title}
          </Alert>
        )}
        <Row>
          <Col>
            <h3>
              {movie.Title} ({movie.Year})
            </h3>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="mx-auto" md={6} lg={4}>
            <img src={movie.Poster} alt="movie poster" className="w-75" />
          </Col>
          <Col md={12} lg={8}>
            <ListGroup variant="flush" id="movieDataList">
              <ListGroup.Item>
                <span className="mr-2">Genre:</span>
                <span className="ml-auto">{movie.Genre}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="mr-2">Released:</span>
                <span className="ml-auto">{movie.Released}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="mr-2">Country:</span>
                <span className="ml-auto">{movie.Country}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="mr-2">Writer(s):</span>
                <span className="ml-auto">{movie.Writer}</span>
              </ListGroup.Item>
              {movie.Director !== "N/A" && (
                <ListGroup.Item>
                  <span className="mr-2">Director(s):</span>
                  <span className="ml-auto">{movie.Director}</span>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <span className="mr-2">Actors:</span>
                <span className="ml-auto">{movie.Actors}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="mr-2">IMDB Rate:</span>
                <span className="ml-auto">{movie.imdbRating}</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <h4>Comments</h4>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default MovieDetails;
