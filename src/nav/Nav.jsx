import "./nav.scoped.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { path: "/", name: "About" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className="mobile-nav">
      <div className="nav-toggle">
        <svg onClick={toggleNav} viewBox="0 0 80 80">
          <path className={navOpen ? "nav-open" : ""} />
        </svg>
      </div>
      <div className={`${navOpen ? "nav-open" : ""} links`}>
        <div>
          {links.map(({ path, name }) => (
            <Link key={path} to={path}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default () => {
  // const [navOpen, setNavOpen] = useState(false);
  // const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className="nav">
      <MobileNav />
      <div className="desktop-nav">
        {links.map(({ path, name }) => (
          <Link key={path} to={path}>
            {name}
          </Link>
        ))}
      </div>
    </div>
    // <header className="w-100 position-fixed">
    //   <Navbar fixed color="dark" dark expand="sm">
    //     <NavbarToggler className="ml-auto" onClick={toggle} />
    //     <Collapse navOpen={navOpen} navbar>
    //       <Nav className="mr-auto" navbar>
    //         <NavItem>
    //           <NavLink tag={Link} to="/">
    //             About
    //           </NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink tag={Link} to="/projects">
    //             Projects
    //           </NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink tag={Link} to="/contact">
    //             Contact
    //           </NavLink>
    //         </NavItem>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // </header>
  );
};
