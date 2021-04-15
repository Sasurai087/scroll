import React from 'react'
import {SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SideBtn} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='projects'>Projects</SidebarLink>
          <SidebarLink to='about'>About</SidebarLink>
          <SidebarLink to='contact'>Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBtn>Theme</SideBtn>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
