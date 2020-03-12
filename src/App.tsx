import React, { Component } from 'react';
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import Main from './components/MainBody/MainBody';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <Header />
        <Main />
        <Footer />
      </div>

    )
  }
};

export default App;
