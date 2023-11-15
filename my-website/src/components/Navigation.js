import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/workExperience">Work Experience</Link>
    </div>
  );
};

export default Navigation;
