import React, { Component } from 'react';
import { MdVideoLibrary } from "react-icons/md";

import { Logo, Nav, Green, GreenIcon } from './Styles';

class Header extends Component {
  render() {
    return (
      <>
      <Nav>
  
        <Logo> 
          <GreenIcon><MdVideoLibrary /></GreenIcon> 
          
          Rádio <Green>Arinha</Green> Bar

        </Logo>
      </Nav>
      </>
    )
  }
}

export default Header;