import React, {Component} from 'react';

import './Products.css'
import Item from './component/Item/Item';
import Oreo from './Image/OREO.jpeg';
import Remind_kun from './Image/Remind-kun.jpeg';
import Miyo from './Image/Miyo.jpg';
import Namecard from './Image/Namecard.jpg';
import Buoy from './Image/Buoy.png';
import Hukidame from './Image/Hukidame.png';
import Other from './Image/Other.jpg';

class Products extends Component{
  render(){
    return(
      <div id="Products" className="Products">
        <h3 className="product-title">制作物</h3>
        <Item image={Oreo} title={'オレオメーカー'} detail="デザイン・開発"/>
        <Item image={Remind_kun} title={'リマインドくん'} detail="bot開発"/>
        <Item image={Miyo} title={'スマートミラー Miyo'} detail="システム・フロント開発"/>
        <Item image={Namecard} title={'基板名刺'} detail="回路作成・基板発注"/>
        <Item image={Buoy} title={'buoy'} detail="デザイン・開発"/>
        <Item image={Hukidame} title={'HUKIDAME'} detail="デザイン・CGI開発"/>
        <Item image={Other} title={''} detail="他にも掲載してない制作物、開発に関わったものもあります。聞いてください。"/>
      </div>
    );
  }
}

export default Products;