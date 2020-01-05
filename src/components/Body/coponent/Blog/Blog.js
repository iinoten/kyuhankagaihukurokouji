import React, {Component} from 'react';

import './Blog.css'
import HatenaBlog from './HatenaBlog.jpg'

class Blog extends Component{
  render(){
    return(
      <a href="http://ten0313.hateblo.jp/" id="Blog" className="Blog">
        <h3 className="Blog-title">ブログ</h3>
        <div className="Blog-image" style={{backgroundImage: `url(${HatenaBlog})`}} />
        <h5>技術ブログ「自由研究をします」</h5>
      </a>
    );
  }
}

export default Blog;