import { BsPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SingleMovie = (props) => {
  const navigate = useNavigate();
  const imdbID = props.movieObj.imdbID;

  return (
    <>
      <img
        key={props.movieObj.imbdID}
        src={props.movieObj.Poster}
        alt={props.movieObj.Title}
        className="w-100 rounded-sm"
      />
      <div className="overlay d-flex flex-column justify-content-between">
        <div>
          <h4>{props.movieObj.Title}</h4>
          <h6>{props.movieObj.Year}</h6>
        </div>
        <div className="d-flex align-items-center justify-content-start">
          <button>
            {" "}
            <BsPlayFill />
          </button>
          <button className="ml-2">
            <AiOutlinePlus />
          </button>
          <button className="ml-2">
            <BiLike />
          </button>
          <button
            className="ml-auto"
            onClick={() => navigate("/moviedetails/" + imdbID)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
