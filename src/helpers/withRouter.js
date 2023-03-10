import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProps = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        location={location}
        navigate={navigate}
        params={params}
      />
    );
  };

  return ComponentWithRouterProps;
};

export default withRouter;
