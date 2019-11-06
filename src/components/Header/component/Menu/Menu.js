import React, {Component} from 'react';
import Title_image from './Title.png'
import './Menu.css'

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
                  <td>僕について</td>
                  <td>連絡先</td>
                </tr>
                <tr className="right-side">
                  <td>制作物</td>
                  <td>ブログ</td>
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