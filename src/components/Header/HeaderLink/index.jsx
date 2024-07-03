import Button from "../../Button";
import { Link } from "react-router-dom";
import "./headerlink.css";

const HeaderLink = ({ url, buttonText, isActive }) => {
  return (
    <Link to={url} className={`header-link ${isActive ? "active" : ""}`}>
      <Button text={buttonText} />
    </Link>
  );
};

export default HeaderLink;
