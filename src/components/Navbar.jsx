import React from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBContainer,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

export default function NavbarComponent() {
  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/users" className="nav-link">
                  Users
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}
