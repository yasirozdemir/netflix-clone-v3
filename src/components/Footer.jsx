import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";

class Footer extends Component {
  render() {
    return (
      <>
        <Container
          id="footer"
          className="d-flex flex-column mt-2 mt-sm-3 mt-md-4 mt-lg-5"
        >
          <Row>
            <Col className="mr-auto">
              <a href="#!" className="text-secondary mr-3">
                <BsFacebook />
              </a>
              <a href="#!" className="text-secondary mr-3">
                <AiOutlineInstagram />
              </a>
              <a href="#!" className="text-secondary mr-3">
                <IoLogoTwitter />
              </a>
              <a href="#!" className="text-secondary">
                <AiFillYoutube />
              </a>
            </Col>
          </Row>
          <Row className="mt-2 text-left">
            <Col xs={3} className="d-flex flex-column">
              <a href="#!" className="text-secondary">
                Audio and Subtitles
              </a>
              <a href="#!" className="text-secondary mt-1">
                Media Center
              </a>
              <a href="#!" className="text-secondary mt-1">
                Privacy
              </a>
              <a href="#!" className="text-secondary mt-1">
                Contact Us
              </a>
            </Col>
            <Col xs={3} className="d-flex flex-column">
              <a href="#!" className="text-secondary">
                Audio Description
              </a>
              <a href="#!" className="text-secondary mt-1">
                Investor Relations
              </a>
              <a href="#!" className="text-secondary mt-1">
                Legal Notices
              </a>
            </Col>
            <Col xs={3} className="d-flex flex-column">
              <a href="#!" className="text-secondary">
                Help Center
              </a>
              <a href="#!" className="text-secondary mt-1">
                Jobs
              </a>
              <a href="#!" className="text-secondary mt-1">
                Cookie Preferences
              </a>
            </Col>
            <Col xs={3} className="d-flex flex-column">
              <a href="#!" className="text-secondary">
                Gift Cards
              </a>
              <a href="#!" className="text-secondary mt-1">
                Terms of Use
              </a>
              <a href="#!" className="text-secondary mt-1">
                Corporate Information
              </a>
            </Col>
          </Row>
          <a
            href="#!"
            className="col-4 col-sm-3 col-md-2 btn btn-outline-secondary rounded-0 px-1 py-1 mt-2"
            role="button"
            aria-disabled="true"
          >
            Service Code
          </a>
          <p className="mr-auto text-secondary mt-2">
            © 1997-2019 Netflix, Inc.
          </p>
        </Container>
      </>
    );
  }
}
export default Footer;
