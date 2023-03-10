import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const BackOffice = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [imgData, setImgData] = useState(null);

  const url = process.env.REACT_APP_API_URL;

  const setMediaPoster = async (mediaId) => {
    try {
      const res = await fetch(url + "/medias/" + mediaId + "/poster", {
        method: "POST",
        body: imgData,
      });
      if (res.ok) {
        setImgData(null);
        setTitle("");
        setYear("");
        setType("");
      } else {
        console.log("error when uploading the poster!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postMedia = async () => {
    try {
      const newMedia = {
        title: title,
        year: year,
        type: type,
        poster: "",
      };
      const res = await fetch(url + "/medias", {
        method: "POST",
        body: JSON.stringify(newMedia),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const resMessage = await res.json();
        const mediaId = resMessage.mediaId;
        await setMediaPoster(mediaId);
      } else {
        console.log("error posting a new media!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const img = e.target.files[0];
    const imgData = new FormData();
    imgData.append("poster", img);
    setImgData(imgData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postMedia();
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="m-0">Welcome to Back Office!</h2>
          <h6 className="mb-3">Here you can publish new medias :)</h6>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Year"
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Type"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <input
                type="file"
                // className="d-none"
                id="avatar"
                name="avatar"
                // ref={inputRef}
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
              ></input>
            </Form.Group>
            <Button variant="light" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BackOffice;
