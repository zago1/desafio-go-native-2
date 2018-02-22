import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.white,
  },

  tabLabel: {
    fontSize: fonts.regular,
    color: colors.dark,
  },

  tabBar: {
    backgroundColor: colors.background,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    elevation: 0,
  },

  indicator: {
    backgroundColor: colors.background,
  },

});


export default styles;
