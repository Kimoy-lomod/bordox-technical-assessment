import "../Styles/SectionOne.css";
import nftCollectorVideo from "../Assets/nft-collectors.mp4";

function SectionOne() {
  return (
    <>
      <div class="content">
        <div class="details-content">
          <h1>LOGO</h1>
          <h1>Embed empowers you to monetize your portfolio</h1>
          <p>
            We enable NFT holders to become influencers, build their audience through a turn-key solution developed to
            monetize and transform their portfolio into a yielding asset. We create passion-based communities.
          </p>
        </div>
      </div>
      <video autoPlay={true} width="400" height="300" autoplay id="myVideo">
        <source src={nftCollectorVideo} type="video/mp4" />
      </video>
    </>
  );
}

export default SectionOne;
