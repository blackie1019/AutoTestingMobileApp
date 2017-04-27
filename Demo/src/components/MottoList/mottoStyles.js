import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
export default StyleSheet.create({
  view: {
  },
  listView: {
    flex: 1,
    height: height-80,
    paddingBottom: height-80,
    flexDirection: 'column',
  },
});