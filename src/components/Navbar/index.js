import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, ThemeBtn, ThemeBtnLink} from '../Navbar/NavbarElements'

const Navbar = ({toggle}) => {
  const [scrollNav, setscrollNav] = useState(false)
  const changeNav = () => {
   if(window.scrollY >= 80){
     setscrollNav(true)
   } else {
     setscrollNav(false)
   }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
  <>
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}>JOHSAKO</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks></NavItem>
          <NavItem>
            <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
          </NavItem>
        </NavMenu>
        <ThemeBtn>
          <ThemeBtnLink>Theme</ThemeBtnLink>
        </ThemeBtn>
      </NavbarContainer>
    </Nav>
  </>
  )
}

export default Navbar
