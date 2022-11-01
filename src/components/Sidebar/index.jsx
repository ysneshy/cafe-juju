import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute, 
    SideBtnWrap
}   from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon/> 
        </Icon> 
        <SidebarMenu>
            <SidebarLink to="/">Comi quieto cafe</SidebarLink>
            <SidebarLink to="/">Variados juju</SidebarLink>
            <SidebarLink to="/">Todo menu juju</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/'> Compre Agora</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
    );
};

export default Sidebar;
