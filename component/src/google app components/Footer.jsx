import Location from "./Location.jsx";
import FooterTText from "./FooterTText.jsx";
import BottomLeftMenu from "./BottomLeftMenu.jsx";
import BottomRightMenu from "./BottomRightMenu.jsx";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="foot">
        <div>
          <Location />
        </div>

        <div className="bottoms">
          <BottomLeftMenu />
          <FooterTText />
          <BottomRightMenu />
        </div>

      </div>
    </>
  );
};

export default Footer;
