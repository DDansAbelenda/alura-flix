import PropTypes from "prop-types";
import "./container.css";
function Container({ children }) {
  return <section className="container">{children}</section>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
