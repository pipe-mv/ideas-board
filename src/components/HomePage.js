import { Link } from "react-router-dom";
import { StyledHomePage } from "../styles/HomePageStyles.js";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <div>
        <div>
          <img src={require("../images/HomePage_image.jpg")} alt="#" />
        </div>
        <h1>Welcome to Idea Board!</h1>
        <Link to="/login">Login</Link>
      </div>
    </StyledHomePage>
  );
};
