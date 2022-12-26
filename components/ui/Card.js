import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/colors';

const Card = ({ children, style }) => {
  return <View style={[styles.inputContainer, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
  },
});
