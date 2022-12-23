import { StyleSheet, Text, View } from 'react-native';

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2CB05',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 40,
  },
  text: {
    color: '#405B66',
    fontWeight: 'bold',
  },
})
