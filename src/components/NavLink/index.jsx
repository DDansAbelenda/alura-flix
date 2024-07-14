import PropTypes from "prop-types";
import Button from "../Button";
import { Link } from "react-router-dom";
import "./navlink.css";

const NavLink = ({
  url,
  buttonText = "",
  isActive = "",
  disabled = false,
  icon = null,
  isFooter = false
}) => {
  return (
    <Link to={url} className={`nav-link ${isActive ? "active" : ""} ${isFooter ? "footer-button" : ""}`}>
      <Button text={buttonText} disabled={disabled} icon={icon} />
    </Link>
  );
};

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  isFooter: PropTypes.bool
};

export default NavLink;
