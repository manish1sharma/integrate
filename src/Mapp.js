import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from './Appbar';
import Main from './Main'

class Mapp extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
          <Appbar />
          <Main />
      </MuiThemeProvider>
      </div>
      );
    }
  }

export default Mapp;
