import { useRef, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

const BackOffice = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [imgData, setImgData] = useState(null);
  const [imgName, setImgName] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const inputRef = useRef(null);
  const imitateInputTypeFile = () => {
    inputRef.current.click();
  };

  const url = process.env.REACT_APP_API_URL;

  const postMedia = async () => {
    try {
      if (imgData) {
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
      } else {
        setErrMsg("You should set a poster to be able to post a new media!");
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
    setImgName(img.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postMedia();
  };

  return (
    <Container>
      {isError && <Alert variant="danger">{errMsg}</Alert>}
      <Row className="justify-content-center">
        <Col xs={6}>
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
            <Form.Group className="d-flex justify-content-center align-items-start mb-3">
              <div className="mr-3">
                <button
                  type="button"
                  onClick={imitateInputTypeFile}
                  style={{
                    border: "1px solid white",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "0.4rem",
                  }}
                >
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M16 13a4 4 0 11-4-4 4 4 0 014 4zm6-4v11H2V9a3 3 0 013-3h1.3l1.2-3h9l1.2 3H19a3 3 0 013 3zm-5 4a5 5 0 10-5 5 5 5 0 005-5z"></path>
                  </svg>
                  <span className="ml-2">Pick a Poster</span>
                </button>
                {imgName && <p className="text-success">{imgName}</p>}
                <input
                  type="file"
                  className="d-none"
                  id="avatar"
                  name="avatar"
                  ref={inputRef}
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                ></input>
              </div>
              <Button variant="light" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BackOffice;
