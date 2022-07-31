import PropTypes from "prop-types";
const Btn = ({ color, action, click }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        className="btn"
        onClick={click}
      >
        {action}
      </button>
    </div>
  );
};

Btn.defaultProps = {
  action: "Add",
  color: "green",
};

Btn.propTypes = {
  action: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default Btn;
