import neonNightClubImg from "../assets/neon-nightclub.jpg";
import CustomButton from "./CustomButton";

const SectionFour = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${neonNightClubImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        color: "white",
      }}
    >
      {/* <img alt="" src={neonNightClubImg} width="600" className="my-3 mx-3 d-inline-block align-top" /> */}
      <div style={{ paddingBottom: "3rem" }}>
        <h1 style={{ fontSize: "7rem" }}>Join The Waitlist</h1>
        <CustomButton />
      </div>
    </div>
  );
};

export default SectionFour;
