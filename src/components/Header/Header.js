import React from "react";
import logo from "../../assets/logo/logo.png";
import search from "../../assets/logo/search.png";
import searchMobile from "../../assets/logo/search-mobile.png";
import searchTablet from "../../assets/logo/search-tablet.png";
import chat from "../../assets/logo/chat.png";
import account from "../../assets/logo/account.png";
import bell from "../../assets/logo/bell.png";
import icons from "../../assets/logo/icons.png";
import button from "../../assets/logo/button.png";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="title title--mobile">
        <div className="title__top">
          <img
            className="title__image title__image--logo"
            src={logo}
            alt="logo"
          />
          <div>
            <div>
              <img
                className="title__image title__image--bell"
                src={bell}
                alt="post"
              />{" "}
              <img
                className="title__image title__image--chat"
                src={chat}
                alt="post"
              />
              <img
                className="title__image title__image--account"
                src={account}
                alt="post"
              />
              <img
                className="title__image title__image--button"
                src={button}
                alt="post"
              />
            </div>
          </div>
        </div>
        <div className="title__bottom">
          <div className="center">
            <img
              className="title__image title__image--search"
              src={searchMobile}
              alt="search"
            />
          </div>
        </div>
      </div>

      <div className="title title--tablet">
        <div className="title__top">
          <img
            className="title__image title__image--logo"
            src={logo}
            alt="logo"
          />
          <div>
            <img
              className="title__image title__image--icons"
              src={icons}
              alt="search"
            />
            <img
              className="title__image title__image--button"
              src={button}
              alt="post"
            />
          </div>
        </div>
        <div className="center">
          <img
            className="title__image title__image--search"
            src={searchTablet}
            alt="search"
          />
        </div>
      </div>

      <div className="title title--desktop">
        <div className="title__wrapper">
          <img
            className="title__image title__image--logo"
            src={logo}
            alt="logo"
          />
          <img
            className="title__image title__image--search"
            src={search}
            alt="search"
          />
          <img
            className="title__image title__image--search"
            src={icons}
            alt="search"
          />
          <img
            className="title__image title__image--button"
            src={button}
            alt="post"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
