import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 54 + metrics.statusBarHeight,
    backgroundColor: colors.white,
  },

  titleContainer: {
    paddingHorizontal: 85,
  },

  arrowContainer: {
    height: 54 + metrics.statusBarHeight,
    width: 54 + metrics.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  assistentContainer: {
    height: 54 + metrics.statusBarHeight,
    width: 54 + metrics.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: colors.primary,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },

});


export default styles;
