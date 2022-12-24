import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const Title = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text500,
    textAlign: 'center',
  },
});
