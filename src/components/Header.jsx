import React, { useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
  } from 'mdb-react-ui-kit';
  import './header.css'

  
function Header() {
    const [openNav, setOpenNav] = useState(false);

  return (
    <div className='nvbar'> 
            <MDBNavbar expand='lg' light bgColor='info' className='fixed-top'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' className='ms-3 text-light'>Alen joy</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse id='nvbr' navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink className='me-5 text-light'  active aria-current='page' href='#home'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink className='me-5 text-light'  active aria-current='page' href='#about'>
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink className='me-5 text-light'  active aria-current='page' href='#project'>
                Projects
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink className='me-5 text-light'  active aria-current='page' href='#skilsss'>
                Skils
              </MDBNavbarLink>
             </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink className='me-5 text-light'  active aria-current='page' href='#contact'>
                Contact 
              </MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header
