import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';

import styles from './styles';


class Repository extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    item: PropTypes.shape({}),
  };

  static defaultProps = {
    onClick: () => {},
    item: {},
  };

  state = {};

  render() {
    const { onClick, item } = this.props;

    return (
      <TouchableOpacity onPress={() => onClick(item.text)} style={styles.container}>
        <View style={styles.containerInfo}>
          <Image
            style={styles.image}
            source={{ uri: 'https://avatars2.githubusercontent.com/u/29647600?v=4' }}
          />
          <View style={styles.containerRepository}>
            <Text style={styles.repository}>Repository</Text>
            <Text style={styles.company}>Company</Text>
          </View>
        </View>
        <Icon name="angle-right" size={20} color="#999" />
      </TouchableOpacity>
    );
  }
}


export default Repository;
