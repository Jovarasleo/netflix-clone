import "./index.css";
import banner from "../../images/banner.png";
import logo from "../../images/logo.svg";
function Header() {
  return (
    <header className="header">
      <div className="header__nav">
        <div className="nav--wrapper">
          <img src={logo} alt="" />
          <button>Sign In</button>
        </div>
      </div>
      <div className="header__banner">
        <img src={banner} alt="" />
      </div>
    </header>
  );
}
export default Header;
