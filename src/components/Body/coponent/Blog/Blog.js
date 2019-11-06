import React, {Component} from 'react';

import './Blog.css'
import HatenaBlog from './HatenaBlog.jpg'

class Blog extends Component{
  render(){
    return(
      <div className="Blog">
        <h3 className="Blog-title">ブログ</h3>
        <div className="Blog-image" style={{backgroundImage: `url(${HatenaBlog})`}} />
        <h5>技術ブログ「自由研究をします」</h5>
      </div>
    );
  }
}

export default Blog;