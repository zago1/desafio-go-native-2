import { StackNavigator, TabNavigator } from 'react-navigation';

import Repositories from 'pages/Repositories';
import { Todas, Abertas, Fechadas } from 'pages/Issues';

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
    }),
  },
}, {
  initialRouteName: 'Repositories',
});

export default Routes;
