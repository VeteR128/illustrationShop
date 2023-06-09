import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Styles from "./Layout.module.scss";

export const Layout = () => {
  const links = [
    { url: "/", name: "home" },
    { url: "/works", name: "works" },
    { url: "/shop", name: "shop" },
    { url: "/about", name: "about" },
    { url: "/contact", name: "contact" },
    { url: "/faq", name: "faq" },
  ];

  return (
    <>
      <header className={Styles.header}>
        {links.map((link) => (
          <NavLink
            key={links.indexOf(link)}
            className={Styles.header__link}
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "red",
              };
            }}
            to={link.url}
          >
            {link.name}
          </NavLink>
        ))}
      </header>
      <Outlet />
      <footer className={Styles.footer}>
        <h3 className={Styles.footer__text}>2023</h3>
      </footer>
    </>
  );
};
