import { Component } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class Movies extends Component {
  state = {
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=83cb8cba&s=",
    moviesToShow: this.props.moviesToShow,
    movies: [],
    isError: false,
    isLoading: true,
    startIndex: this.props.startIndex,
    endIndex: this.props.endIndex,
  };

  getMovies = async () => {
    try {
      const response = await fetch(this.state.url + this.state.moviesToShow, {
        method: "GET",
      });
      if (response.ok) {
        const moviesDataRaw = await response.json();
        const moviesData = moviesDataRaw.Search;

        this.setState({
          ...this.state,
          movies: moviesData,
          isLoading: false,
        });
      } else {
        console.error("error");
        this.setState({
          ...this.state,
          isError: true,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error(error);
      this.setState({
        ...this.state,
        isError: true,
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <>
        {this.state.isError && (
          <Alert className="w-75 mx-auto" variant="danger">
            Something went wrong loading the moveis!
          </Alert>
        )}
        <Row className="no-gutters justify-content-center">
          {this.state.movies.splice(0, 5).map((movieObj) => {
            return (
              <Col
                xs={8}
                sm={5}
                md={3}
                lg={2}
                key={movieObj.imdbID}
                className="movieCard mx-1 mb-2"
              >
                {this.state.isLoading && (
                  <Spinner animation="border" variant="secondary" />
                )}
                <SingleMovie movieObj={movieObj} />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default Movies;
