import { Component } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class Movies extends Component {
  state = {
    url: process.env.REACT_APP_API_URL,
    movies: [],
    isError: false,
    isLoading: true,
    startIndex: this.props.startIndex,
    endIndex: this.props.endIndex,
  };

  getMovies = async () => {
    try {
      const response = await fetch(this.state.url + "/medias");
      if (response.ok) {
        const moviesData = await response.json();
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
          {this.state.movies?.map((movieObj) => {
            return (
              <Col
                xs={8}
                sm={5}
                md={3}
                lg={2}
                key={movieObj.id}
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
