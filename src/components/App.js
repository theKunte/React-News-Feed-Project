import React, { Component } from 'react';
import News from './News/News';
import './App.css';

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
        query: 'domains=techcrunch.com&language=de'
      }
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jenny's News Feed</h1>
        </header>
        <News news={this.state.news1}/>
        <News news={this.state.news2}/> 
      </div>
    );
  }
}

export default App;
