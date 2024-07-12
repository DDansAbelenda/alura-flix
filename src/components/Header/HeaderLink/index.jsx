import PropTypes from "prop-types";
import Button from "../../Button";
import { Link } from "react-router-dom";
import "./headerlink.css";

const HeaderLink = ({ url, buttonText, isActive }) => {
  return (
    <Link to={url} className={`header-link ${isActive ? "active" : ""}`}>
      <Button text={buttonText}/>
    </Link>
  );
};

HeaderLink.propTypes = {
  url: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export default HeaderLink;
