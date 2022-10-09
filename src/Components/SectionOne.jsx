import "../Styles/SectionOne.css";
import nftCollectorVideo from "../Assets/nft-collectors.mp4";
import mainLogo from "../Assets/logo_white.svg";

function SectionOne() {
  return (
    <>
      <div class="content">
        <div class="details-content">
          <img alt="" src={mainLogo} width="60" height="60" className="my-3 mx-3 d-inline-block align-top" />
          <h1>Embed empowers you to monetize your portfolio</h1>
          <hr
            style={{
              color: "#16BBFD",
              backgroundColor: "#16BBFD",
              height: 5,
            }}
          />
          <p>
            We enable NFT holders to become influencers, build their audience through a turn-key solution developed to
            monetize and transform their portfolio into a yielding asset. We create passion-based communities.
          </p>
        </div>
      </div>
      <video autoPlay muted id="myVideo">
        <source src={nftCollectorVideo} type="video/mp4" />
      </video>
    </>
  );
}

export default SectionOne;
