import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

const BackOffice = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [imgData, setImgData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const url = process.env.REACT_APP_API_URL;

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
        const res2 = await fetch(url + "/medias/" + mediaId + "/poster", {
          method: "POST",
          body: imgData,
        });
        if (res2.ok) {
          setImgData(null);
          setTitle("");
          setYear("");
          setType("");
        } else {
          setErrMsg("Oops! An error occurred related to your poster :(");
          setIsError(true);
        }
      } else {
        setErrMsg("Oops! An error occurred related to your media content :(");
        setIsError(true);
      }
    } catch (error) {
      setErrMsg("Oops! An error occurred related to POST operation :(");
      setIsError(true);
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
      {isError && <Alert variant="danger">{errMsg}</Alert>}
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
