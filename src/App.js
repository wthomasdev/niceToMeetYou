import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
