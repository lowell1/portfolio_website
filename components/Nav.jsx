import { useState } from "react";
import Link from "next/link";
import {
  mobileNav,
  nav,
  navToggle,
  navOpen,
  links,
  desktopNav,
} from "../styles/nav.module.scss";

const linkInfo = [
  { path: "/", name: "About" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className={mobileNav}>
      <div className={navToggle}>
        <svg onClick={toggleNav} viewBox="0 0 80 80">
          <path className={isNavOpen ? navOpen : ""} />
        </svg>
      </div>
      <div className={`${isNavOpen ? navOpen : ""} ${links}`}>
        <div>
          {linkInfo.map(({ path, name }) => (
            <Link key={path} href={path}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div className={nav}>
      <MobileNav />
      <div className={desktopNav}>
        {linkInfo.map(({ path, name }) => (
          <Link key={path} href={path}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
