import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function NavbarComponent() {
  const location = useLocation(); // Get the current route location
  console.log("NavbarComponent rendered"); // Debugging line

  return (
    <header>
<MDBNavbar
  expand="lg"
  light
  bgColor="black"
  className="text-slate-50 font-semibold"
  style={{ border: "2px solid red" }}
>
  <MDBContainer fluid>
    {/* Navbar Toggler for Mobile */}
    <MDBNavbarToggler
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
      data-target="#navbar"
    >
      <MDBIcon fas icon="bars" />
    </MDBNavbarToggler>

    {/* Navbar Collapse */}
    <div className="collapse navbar-collapse" id="navbar">
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