import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  // ListGroup,
  Spinner,
  Alert,
} from "react-bootstrap";

const MovieDetails = () => {
  const params = useParams();
  const movieID = params.movieID;

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const url = process.env.REACT_APP_API_URL;

  const fetchMovieToShow = async () => {
    try {
      const response = await fetch(url + "/medias/" + movieID);
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
              {movie.title} ({movie.year})
            </h3>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="mx-auto" md={6} lg={4}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={movie.poster} alt="movie poster" className="w-75" />
              <a
                className="mt-2 downloadLink"
                style={{
                  border: "1px solid white",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.4rem",
                  color: "white",
                  textDecoration: "none",
                  transition: "all 150ms",
                }}
                href={
                  process.env.REACT_APP_API_URL +
                  "/medias/" +
                  movie.id +
                  "/pdf/download"
                }
              >
                Download PDF
              </a>
            </div>
          </Col>
          {/* <Col md={12} lg={8}>
            <ListGroup variant="flush" id="movieDataList">
              <ListGroup.Item>
                <span className="mr-2">Genre:</span>
                <span className="ml-auto">{movie.genre}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="mr-2">Released:</span>
                <span className="ml-auto">{movie.released}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="mr-2">Country:</span>
                <span className="ml-auto">{movie.country}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="mr-2">Writer(s):</span>
                <span className="ml-auto">{movie.writer}</span>
              </ListGroup.Item>
              {movie.Director !== "N/A" && (
                <ListGroup.Item>
                  <span className="mr-2">Director(s):</span>
                  <span className="ml-auto">{movie.director}</span>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <span className="mr-2">Actors:</span>
                <span className="ml-auto">{movie.actors}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="mr-2">IMDB Rate:</span>
                <span className="ml-auto">{movie.imdbRating}</span>
              </ListGroup.Item>
            </ListGroup>
          </Col> */}
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
