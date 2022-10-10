import arrowRight from "../assets/arrow_right.svg";

const CustomButton = () => {
  return (
    <button class="custom-button border-gradient border-gradient-purple">
      <span>Join Waitlist</span>
      <span>
        <img alt="" src={arrowRight} width="30" height="30" className="my-3 mx-3 d-inline-block align-top" />
      </span>
    </button>
  );
};

export default CustomButton;
