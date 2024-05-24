import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";
function Navbar() {
  return (
    <div className="  nav_bar">
      <nav class="navbar  bg-white navbar-expand-lg  fixed-top border-bottom-1 ">
        <div class="container-fluid ">
          {/* <img src={('public/pro.png')} style={{width:"65px",height:"62px" , borderRadius:"80px"}}/> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end w-25 p-1 "
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header ">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <img
                  src={"public/pro.png"}
                  style={{
                    width: "65px",
                    height: "62px",
                    borderRadius: "80px",
                  }}
                />
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="content">
              <ul class="navbar-nav justify-content-start flex-grow-1 ">
                <li class="nav-item  hsla(0, 0%, 98%, 0.35) ">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li class="nav-item  hsla(0, 0%, 98%, 0.35) ">
                  <a class="nav-link active" aria-current="page" href="about">
                    About
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="works">
                    Project
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
