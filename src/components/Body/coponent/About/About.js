import React, {Component} from 'react';

import './About.css'

class About extends Component{
  render(){
    return(
      <div id="About" className="About">
        <h3 className="about-title">僕について</h3>
        <div className="about-profile">
          <h5>東京でフロントエンドエンジニアをしています。<br />
              2019年春に通信制の高校を卒業。<br />
              2016年からマイコンを使ったハードの開発などを始める。<br />
              2018年にインターンシップで渋谷区のWeb会社でバックエンド開発に取り組む。<br />
              フロントサイドの開発ではReactJSを用いたSPAアプリケーションを得意にしています。
            </h5>
        </div>
      </div>
    );
  }
}

export default About;