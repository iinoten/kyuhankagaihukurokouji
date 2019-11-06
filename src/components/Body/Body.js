import React, {Component} from 'react';

import './Body.css'
import About from './coponent/About/About';
import Products from './coponent/Products/Products';
import Blog from './coponent/Blog/Blog';
import Contact from './coponent/Contact/Contact';

class Body extends Component{
  render(){
    return(
      <div>
        <About />
        <Products />
        <Blog />
        <Contact />
      </div>
    );
  }
}

export default Body;