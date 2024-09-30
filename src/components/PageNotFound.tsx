import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface PageNotFoundProps {}

const PageNotFound: FunctionComponent<PageNotFoundProps> = () => {
  let navigate = useNavigate();
  return (
    <>
      <h4 className="text-danger">404 - Page not found</h4>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Back
      </button>
      <button className="btn btn-warning" onClick={() => navigate("/")}>
        Home
      </button>
    </>
  );
};

export default PageNotFound;
