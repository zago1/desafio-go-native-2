import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from 'services/api';

import { colors } from 'styles';

// import PropTypes from 'prop-types';

import styles from './styles';


class RepositoryHeader extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    repositories: [],
    repository: '',
  };

  componentWillMount() {
    this.getRepositories()
      .then((repositories) => { repositories ? this.setState({ repositories }) : this.setState({ repositories: [] }); });
  }

  getRepositories = async () => {
    const response = await AsyncStorage.getItem('@desafio_gonative2:repositories');

    return response;
  }

  addRepository = async () => {
    const { repository, repositories } = this.state;
    if (repository !== '') {
      const response = await api.get(`/repos/${repository}`);
      console.log(response, repositories);
      if (response.ok) {
        const { data } = response;
        repositories.push({
          id: data.id,
          name: data.name,
          organization: data.owner.login,
          avatar: data.owner.avatar_url,
        });
        await AsyncStorage.setItem('@desafio_gonative2:repositories', repositories);

        Alert('Works!');
        this.setState({ repositories });
      } else {
        Alert('Repositório não encontrado', 'Digite a organização/repositório');
      }
    } else {
      Alert('Digite o nome da organização/repositório');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Adicionar repositório"
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(repository) => { this.setState({ repository }); }}
        />
        <TouchableOpacity onPress={this.addRepository}>
          <Icon name="plus" color={colors.primary} size={16} />
        </TouchableOpacity>
      </View>
    );
  }
}


export default RepositoryHeader;
