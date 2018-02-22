import React, { Component } from 'react';
import {
  View,
  AsyncStorage,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

import Repository from './Components/Reposirory';


class Repositories extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {};

  state = {};

  handleClick = async (item) => {
    try {
      await AsyncStorage.setItem('@desafio_gonative2:repository', JSON.stringify(item));
      const { navigate } = this.props.navigation;

      navigate('Issues');
    } catch (error) {
      console.log('Falha ao salvar item!');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Repository onClick={() => { this.handleClick({ text: 'Teste' }) }} />
      </View>
    );
  }
}


export default Repositories;
