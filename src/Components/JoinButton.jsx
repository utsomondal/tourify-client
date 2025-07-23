import { Link } from "react-router";

const JoinButton = () => {
  return (
    <div>
      <div className="join">
        <span className="login-btn">
          <Link to="/login" className="text-sm">
            Login
          </Link>
        </span>
        <span className="register-btn">
          <Link to="/register" className="text-sm">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default JoinButton;
