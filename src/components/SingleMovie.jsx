import { BsPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SingleMovie = ({ movieObj }) => {
  const navigate = useNavigate();

  return (
    <>
      <img
        src={movieObj.poster}
        alt={movieObj.title}
        className="w-100 rounded-sm"
      />
      <div className="overlay d-flex flex-column justify-content-between">
        <div>
          <h4>{movieObj.title}</h4>
          <h6>{movieObj.year}</h6>
        </div>
        <div className="d-flex align-items-center justify-content-start">
          <button>
            {" "}
            <BsPlayFill />
          </button>
          <a
            href={
              process.env.REACT_APP_API_URL +
              "/medias/" +
              movieObj.id +
              "/pdf/download"
            }
          >
            <button className="ml-2">
              <AiOutlinePlus />
            </button>
          </a>
          <button className="ml-2">
            <BiLike />
          </button>
          <button
            className="ml-auto"
            onClick={() => navigate("/moviedetails/" + movieObj.id)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
