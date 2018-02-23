import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54 + metrics.statusBarHeight,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },

  input: {
    backgroundColor: colors.background,
    fontSize: fonts.small,
    borderRadius: 5,
    width: '90%',
    marginVertical: 10,
  },

});


export default styles;
