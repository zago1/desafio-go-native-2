import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Repositories from 'pages/Repositories';
import RepositoryHeader from 'pages/Repositories/Components/RepositoryHeader';
import { Todas, Abertas, Fechadas, styles, IssueHeader } from 'pages/Issues';

const Routes = StackNavigator({
  Repositories: {
    screen: Repositories,
  },
  Issues: {
    screen: TabNavigator({
      Todas: {
        screen: Todas,
      },
      Abertas: {
        screen: Abertas,
      },
      Fechadas: {
        screen: Fechadas,
      },
    }, {
      tabBarOptions: {
        style: styles.tabBar,
        labelStyle: styles.tabLabel,
        indicatorStyle: styles.indicator,
      },
    }),
  },
}, {
  initialRouteName: 'Repositories',
  navigationOptions: {
    header: props => (props.scene.route.routeName === 'Repositories' ? <RepositoryHeader {...props} /> : <IssueHeader {...props} />),
  },
});

export default Routes;
