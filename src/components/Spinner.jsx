import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = () => {
  return (
    <>
      <div className="container spinner__container">
        <div className="row spinner__row">
          <FontAwesomeIcon icon={faSpinner} spin className="spinner"/>
        </div>
      </div>
    </>
  );
};

export default Spinner;