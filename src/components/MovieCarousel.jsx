import { Component } from "react";
import { Container } from "react-bootstrap";
import Movies from "./Movies";

class MovieCarousel extends Component {
  render() {
    return (
      <Container fluid className="mb-4">
        <h5 className="text-left">{this.props.moviesToShow}</h5>
        <Container
          fluid
          id={this.props.moviesToShow}
          className="mt-sm-1 mt-md-2 mt-lg-3 px-0"
        >
          {/* <Carousel>
            <Carousel.Item>
              <Movies
                moviesToShow={this.props.moviesToShow}
              />
            </Carousel.Item>
            <Carousel.Item></Carousel.Item>
          </Carousel> */}
          <Movies moviesToShow={this.props.moviesToShow} />
        </Container>
      </Container>
    );
  }
}

export default MovieCarousel;
