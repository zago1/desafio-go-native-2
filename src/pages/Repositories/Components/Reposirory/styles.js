import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: 20,
    borderRadius: 5,
    padding: 20,
  },

  containerInfo: {
    flexDirection: 'row',
  },

  containerRepository: {
    alignSelf: 'center',
    marginHorizontal: 10,
  },

  repository: {
    fontSize: fonts.big,
    color: colors.primary,
  },

  company: {
    fontSize: fonts.small,
    color: colors.inactive,
  },

  image: {
    width: 45,
    height: 45,
  },

});

export default styles;
