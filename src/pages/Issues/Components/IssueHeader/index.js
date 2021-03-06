import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import { NavigationActions } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'styles';

import PropTypes from 'prop-types';

import styles from './styles';


class IssueHeader extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {};

  state = {
    repository: 'Teste',
  };

  componentWillMount() {
    this.getRepository()
      .then(repository => this.setState({ repository }));
  }

  getRepository = async () => {
    const repository = await AsyncStorage.getItem('@desafio_gonative2:repository');
    return repository;
  }

  backward = () => {
    const { dispatch } = this.props.navigation;

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Repositories' }),
      ],
    });

    dispatch(resetAction);
  }

  render() {
    const { repository } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrowContainer} onPress={this.backward}>
          <Icon name="angle-left" size={20} color={colors.primary} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{repository}</Text>
        </View>
        <View style={styles.assistentContainer} />
      </View>
    );
  }
}

export default IssueHeader;
