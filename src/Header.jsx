import React from "react";
import { NavLink,Link } from "react-router-dom";

function Header() {
  
  return (
    <>
      <header
        style={{ boxShadow: "0 0 5px 0 rgba(0,0,0,.3)", marginTop: "10px",  marginBottom:"50px"}}
      >
        <div className="header-container pt-3 pb-3">
          <div className="header-image d-flex justify-content-center">
            <Link
              className="col-lg-9 col-sm-12"
              href="#"
              target=""
              rel="noopener noreferrer"
            >
              <img
                style={{ height: "200px", width: "100%" }}
                src="https://github.com/Navanitharan/blogSite/assets/102136576/fcaf57af-900e-4004-af5e-553c61cf098e"
                alt="Header"
              />
            </Link>
          </div>
          <div className="blog-nav">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <div className="col-3"></div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink exact activeClassName="active" to={"/"} className="nav-link "  aria-current="page" >
                        All
                     </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/fullstack"} activeClassName="active " className="nav-link">
                        Full-Stack Development
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/datascience"} activeClassName="active " className="nav-link">
                        DataScience
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/cybersecurity"} activeClassName="active " className="nav-link" >
                        Cyber Security
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/career"} activeClassName="active " className="nav-link" >
                        Career
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="mx-1"></div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header
