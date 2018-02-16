import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import Routes from './routes';


// import PropTypes from 'prop-types';

// import styles from './styles';


class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};


  render() {
    return (
      <Routes />
    );
  }
}


export default App;
