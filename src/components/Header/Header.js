import React, {Component} from 'react';

import './Header.css'
import Menu from './component/Menu/Menu';

class Header extends Component{
  render(){
    return(
      <div>
        <Menu />
        <div id="Selfie" style={{height: (window.innerWidth*0.45)+'px'}} />
      </div>
    );
  }
}

export default Header;