import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const navLinkStyles = ({ isActive }) => (isActive ? "active-tab" : "");
  const navLinkStylesMob = ({ isActive }) => (isActive ? "active-tab-mob" : "");

  return (
    <>
      <div>
        <div className={open ? "menu menu-shown" : "menu"}>
          <div className="menu-head">
            <div className="menu-left">
              <a href="#">
                <svg
                  className="theme-switch-icon"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.848 0 0 114.848 0 256s114.848 256 256 256 256-114.848 256-256S397.152 0 256 0zm0 480C132.48 480 32 379.52 32 256S132.48 32 256 32s224 100.48 224 224-100.48 224-224 224z"></path>
                  <path d="M256 64v384c112 0 192-85.968 192-192 0-106.048-80-192-192-192z"></path>
                </svg>
              </a>
              <div className="menu-separator"></div>
              <a href="#" className="header-language">
                UA
              </a>
            </div>

            <a href="#">
              <svg
                className="menu-close-icon"
                onClick={() => setOpen(false)}
                fill="currentColor"
                viewBox="0 0 23 23"
              >
                <path d="M.38 1.97a1.14 1.14 0 010-1.59 1.14 1.14 0 011.6 0l9.51 9.54L21.03.38a1.12 1.12 0 011.57 0c.45.45.45 1.16 0 1.59l-9.52 9.52 9.52 9.54a1.12 1.12 0 01-1.57 1.59l-9.54-9.54-9.52 9.54c-.44.43-1.14.43-1.59 0a1.14 1.14 0 010-1.59l9.53-9.54z"></path>
              </svg>
            </a>
          </div>

          <div className="menu-body">
            <ul>
              <li>
                <NavLink
                  to="/blog/all"
                  onClick={handleClose}
                  className={navLinkStylesMob}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={handleClose}
                  className={navLinkStylesMob}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/setup"
                  onClick={handleClose}
                  className={navLinkStylesMob}
                >
                  Tech
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/for-you"
                  onClick={handleClose}
                  className={navLinkStylesMob}
                >
                  For You
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/find-me"}
                  onClick={handleClose}
                  className={navLinkStylesMob}
                >
                  Find Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/project/all"}
                  onClick={handleClose}
                  className={navLinkStylesMob}
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <header className="header">
          <div className="header-top">
            <div className="container-fluid wrapper">
              <div className="row">
                <div className="logo-container">
                  <Link to={"/"} className="logo">
                    t3nna
                  </Link>
                </div>

                <div className="theme-side">
                  <a href="#" className="header-language">
                    UA
                  </a>

                  <a href="#" className="header-theme">
                    <svg
                      className="theme-switch-icon"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.848 0 0 114.848 0 256s114.848 256 256 256 256-114.848 256-256S397.152 0 256 0zm0 480C132.48 480 32 379.52 32 256S132.48 32 256 32s224 100.48 224 224-100.48 224-224 224z"></path>
                      <path d="M256 64v384c112 0 192-85.968 192-192 0-106.048-80-192-192-192z"></path>
                    </svg>
                  </a>

                  <button
                    className="header-menu-btn"
                    onClick={() => setOpen(true)}
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="container-fluid wrapper">
              <div className="row">
                <nav className="header-nav">
                  <ul className="nav">
                    <li>
                      <NavLink to="/blog/all" className={navLinkStyles}>
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className={navLinkStyles}>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/setup" className={navLinkStyles}>
                        Tech
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/for-you" className={navLinkStyles}>
                        For You
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/find-me"} className={navLinkStyles}>
                        Find Me
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/project/all"} className={navLinkStyles}>
                        Projects
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navigation;
