import PropTypes from "prop-types";
import Btn from "./Btn";

const Header = ({ title, color, action, click }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Btn color={color} action={action} click={click} />
    </header>
  );
};

Header.defaultProps = {
  title: "Tasks Tracker",
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};
// ! CSS in js as object
// const headerStyling = {
//   color: "red",
//   backgroundColor: "black",
// };
export default Header;
