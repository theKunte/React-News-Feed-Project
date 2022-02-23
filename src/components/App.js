import React, { Component } from 'react';
import News from './News/News';
import './App.css';
import Sidenews from './News/Sidenews'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      news1:{
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2:{
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3:{
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    };
  }
  render() {
    return (
      <div className="conatiner-fluis">
       <div className="navbar-fixed">
         <nav>
           <div className="nav-wrapper indigo lighteh-4">
             <a href="/" className="bran-logo center"> Jenny's Feed</a>
           </div>
         </nav>
       </div>
       <div className="row">
         <div className="col s8">
         <News news={this.state.news1}/>
         <News news={this.state.news2}/> 
         </div>
         <div className="col s4">
           <Sidenews news={this.state.news3}/>
         </div>
       </div> 
      </div>
    );
  }
}

export default App;
