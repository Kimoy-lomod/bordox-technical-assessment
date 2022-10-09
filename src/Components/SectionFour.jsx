import Button from "react-bootstrap/Button";
import neonNightClubImg from "../Assets/neon-nightclub.jpg";

const SectionFour = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${neonNightClubImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
        height: "75vh",
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
        <Button>Join</Button>
      </div>
    </div>
  );
};

export default SectionFour;
