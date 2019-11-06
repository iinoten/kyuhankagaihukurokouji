import React, {Component} from 'react';

import './Contact.css'
import Twitter from './Logo/Twitter.jpg';
import Facebook from './Logo/Facebook.png';
import GitHub from './Logo/GitHub.png';

class Contact extends Component{
  render(){
    return(
      <div id="Contact" className="Contact">
        <h3 className="Contact-title">連絡先</h3>
        <div className="Contact-logos">
          <a href="https://twitter.com/ntenten_Q"><div style={{backgroundImage: `url(${Twitter})`}} className="lynk-logo" /></a>
          <a href="https://github.com/iinoten"><div style={{backgroundImage: `url(${GitHub})`}} className="lynk-logo" /></a>
          <a href="https://www.facebook.com/ten.iine.9"><div style={{backgroundImage: `url(${Facebook})`}} className="lynk-logo" /></a>
        </div>
      </div>
    );
  }
}

export default Contact;