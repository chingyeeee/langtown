import { Link } from "react-router-dom";

const Button = (props) => {
  const { text, to } = props;

  return (
    <Link className="btn-component" to={to}>
      {text}
    </Link>
  );
};

export default Button;
