import { Component } from "react";
import { Dropdown, DropdownButton, Button, Container } from "react-bootstrap";
import { FaAlignJustify } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";

class GenreBar extends Component {
  render() {
    return (
      <Container fluid className="align-items-center d-none d-lg-flex">
        <h2>TV Shows</h2>
        <DropdownButton className="ml-2" title="Movies" id="genreDropdown">
          <Dropdown.Item href="#Sherlock Holmes">Sherlock Holmes</Dropdown.Item>
          <Dropdown.Item href="#Harry Potter">Harry Potter</Dropdown.Item>
          <Dropdown.Item href="#The Lord of the Rings">
            The Lord of the Rings
          </Dropdown.Item>
        </DropdownButton>

        <div className="ml-auto">
          <Button
            className="px-3 d-inline-flex justify-content-center align-items-center"
            variant="outline-light"
          >
            <FaAlignJustify />
          </Button>
          <Button
            className="ml-1 px-3  d-inline-flex justify-content-center align-items-center"
            variant="outline-light"
          >
            <MdLocalMovies />
          </Button>
        </div>
      </Container>
    );
  }
}

export default GenreBar;
