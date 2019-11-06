import React, {Component} from 'react';

import './Item.css'

class Item extends Component{
  render(){
    return(
      <div className="Item">
        <div className="Item-image" style={{backgroundImage: `url(${this.props.image})`}} />
        <div className="Description">
          <h3>{this.props.title}</h3>
          <h5>{this.props.detail}</h5>
        </div>
      </div>
    );
  }
}

export default Item;