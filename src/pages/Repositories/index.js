import React, { Component } from 'react';
import {
  View,
} from 'react-native';

// import PropTypes from 'prop-types';

import styles from './styles';

import Repository from './Components/Reposirory';


class Repositories extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};


  render() {
    return (
      <View style={styles.container}>
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
      </View>
    );
  }
}


export default Repositories;
