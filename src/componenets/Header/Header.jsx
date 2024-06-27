import "./Header.scss";
import { Link } from "react-router-dom";
import chevy from "../../assets/images/right-thin-chevron-svgrepo-com.svg";
import { pushRotate as Menu } from "react-burger-menu";

export default function Header() {
  return (
    <header className="header">
      <div className="header__mobile-container">
        <a href="#" className="header__link">
          <h3 className="header__slogan-mobile">Your Personal Ai Stylist</h3>
        </a>
        <a href="#" className="header__link">
          <h1 className="header__logo">OUTFITAI</h1>
        </a>
        <a href="#" className="header__link">
          <h3 className="header__slogan">Your Personal Ai Stylist</h3>
        </a>
      </div>
      <div className="header__menu-dt">
      <Link className="header__link" to={"/dashboard"}>
          <div className="header__item-border">
            <div className="header__nav-container">
              <p className="header__nav">LOGIN</p>
            </div>
          </div>
        </Link>
        <Link className="header__link" to={"/dashboard"}>
          <div className="header__item-border">
            <div className="header__nav-container">
              <p className="header__nav">REGISTER</p>
            </div>
          </div>
        </Link>
        <Link className="header__link" to={"/dashboard"}>
          <div className="header__item-border">
            <div className="header__nav-container">
              <p className="header__nav">ABOUT US</p>
            </div>
          </div>
        </Link>
      </div>
      <Menu right>
        <Link to={"/dashboard"}>
          <div className="header__item-border">
            <div className="header__nav-container">
              <p className="header__nav">LOGIN</p>
              <img
                className="header__chevron"
                src={chevy}
                alt="right chevron"
              />
            </div>
          </div>
        </Link>
        <Link to={"/dashboard"}>
          <div className="header__item-border">
            <div className="header__nav-container">
              <p className="header__nav">REGISTER</p>
              <img
                className="header__chevron"
                src={chevy}
                alt="right chevron"
              />
            </div>
          </div>
        </Link>
        <Link to={"/dashboard"}>
          <div className="header__item-border">
            <div className="header__nav-container">
              <p className="header__nav">ABOUT US</p>
              <img
                className="header__chevron"
                src={chevy}
                alt="right chevron"
              />
            </div>
          </div>
        </Link>
      </Menu>
    </header>
  );
}
