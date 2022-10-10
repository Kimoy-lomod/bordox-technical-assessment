import { useState } from "react";
import arrowRight from "../assets/arrow_right.svg";
import arrowRightPurple from "../assets/arrow_right_purple.svg";
import "../styles/index.css";

const CustomButton = (props) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div className={props.className}>
      <button
        className="custom-button border-gradient border-gradient-purple"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>Join Waitlist</span>
        <span>
          <img
            alt=""
            src={hover ? arrowRightPurple : arrowRight}
            width="30"
            height="30"
            className="my-3 mx-3 d-inline-block align-top"
          />
        </span>
      </button>
    </div>
  );
};

export default CustomButton;
