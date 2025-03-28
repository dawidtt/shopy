import FooterContainer from "./FooterContainer";
import Logo from "./Logo";
import { MdOutlinePhone, MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="p-8 flex gap-4 bg-blue-100 mt-22">
      <Logo></Logo>

      <div className="flex flex-1 mx-4  flex-wrap items-center gap-12 md:justify-around">
        <FooterContainer
          heading={"Address"}
          textArr={[{ text: "212  Random, Address" }, { text: "12345, USA" }]}
        ></FooterContainer>
        <FooterContainer
          heading={"Contact"}
          textArr={[
            { text: " + 123 456 789", icon: <MdOutlinePhone /> },
            { text: " email@mail.com", icon: <MdMailOutline /> },
          ]}
        ></FooterContainer>
        <div className="flex flex-col gap-2 text-left">
          <Link to={"/"}>About us</Link>
          <Link to={"/"}>Terms</Link>
          <Link to={"/"}>Privacy</Link>
        </div>
        <div className="flex gap-3 md:gap-6">
          <a target="blank" href="https://www.facebook.com/">
            <FaFacebook size={22} />
          </a>
          <a target="blank" href="https://www.instagram.com/">
            <FaInstagram size={22} />
          </a>
          <a target="blank" href="https://x.com/">
            <FaTwitter size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
