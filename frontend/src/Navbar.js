import { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showNavExternal, setShowNavExternal] = useState(false);
  return (
    <>
    <MDBCollapse show={showNavExternal}>
    <div >
      <MDBNavbarBrand>Navbar</MDBNavbarBrand>
      <span className='text-muted'> <Link to="/movies">My Movies </Link></span>
    </div>
  </MDBCollapse>
    <MDBNavbar light bgColor="light" data-testid="navbarid">
      <MDBContainer fluid>
      <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>        
        <MDBBtn color="light">
          <Link to="/">Logout</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
    </>
  )
}

export default Navbar