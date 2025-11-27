import fbLogo from "../assets/img/footer-facebook.png";
import twitterLogo from "../assets/img/footer-twitter.png";
import youTubeLogo from "../assets/img/footer-youtube.png";
import PinterestLogo from "../assets/img/footer-pinterest.png";
import GoogleMApsLogo from "../assets/img/footer-periscope.png";



export default function Socials() {

  return (
     <div>

      <img className="socials" src={fbLogo} alt="" />
      <img className="socials" src={twitterLogo} alt="" />
      <img className="socials" src={youTubeLogo} alt="" />
      <img className="socials" src={PinterestLogo} alt="" />
      <img className="socials" src={GoogleMApsLogo} alt="" />

    </div>
  );      
}
