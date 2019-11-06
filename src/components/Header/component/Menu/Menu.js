import React, {Component} from 'react';
import Title_image from './Title.png'
import './Menu.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Menu extends Component{
  render(){
    return(
      <div id="Menu">
        <div><img className="Title" src={Title_image} /></div>
        <div className="guid-menu">
          <nav>
            <table className="nav-table">
              <tbody>
                <tr className="left-side">
                  <td><AnchorLink className="Anchor" href="#About">僕について</AnchorLink></td>
                  <td><AnchorLink className="Anchor" href="#Contact">連絡先</AnchorLink></td>
                </tr>
                <tr className="right-side">
                  <td><AnchorLink className="Anchor" href="#Products">制作物</AnchorLink></td>
                  <td><AnchorLink className="Anchor" href="#Blog">ブログ</AnchorLink></td>
                </tr>
              </tbody>
            </table>
          </nav>
        </div>
      </div>
    );
  }
}

export default Menu;