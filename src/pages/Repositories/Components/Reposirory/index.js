import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// import PropTypes from 'prop-types';

import styles from './styles';


class Repository extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};


  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => { }}>
          <Image
            style={styles.image}
            src={{ uri: '' }}
          />
          <View>
            <Text>Repository</Text>
            <Text>Company</Text>
          </View>
          <Icon name="arrow" size="small" color="#666" />
        </TouchableOpacity>
      </View>
    );
  }
}


export default Repository;
