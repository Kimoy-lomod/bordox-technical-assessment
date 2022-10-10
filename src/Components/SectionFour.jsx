import neonNightClubImg from "../assets/neon-nightclub.jpg";
import CustomButton from "./CustomButton";
import "../styles/SectionFour.css";

const SectionFour = () => {
  return (
    <div
      className="s4-container"
      style={{
        backgroundImage: `url(${neonNightClubImg})`,
      }}
    >
      <div style={{ paddingBottom: "3rem" }}>
        <h1 style={{ fontSize: "7rem" }}>Join The Waitlist</h1>
        <CustomButton className="d-flex justify-content-center" />
      </div>
    </div>
  );
};

export default SectionFour;
