import React, {Component} from 'react';

import './Header.css'

class Header extends Component{
  render(){
    return(
      <div>
        <div id="Selfie" style={{height: (window.innerWidth*0.45)+'px'}} />
      </div>
    );
  }
}

export default Header;