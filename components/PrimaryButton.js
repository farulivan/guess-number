import { Pressable, StyleSheet, Text, View } from 'react-native';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.outerContainer, styles.innerContainer]
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: '#B39504' }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 40,
    overflow: 'hidden',
  },
  innerContainer: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#F2CB05',
    paddingVertical: 6,
    paddingHorizontal: 18,
    elevation: 2,
  },
  text: {
    color: '#405B66',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // ios
  pressed: {
    opacity: 0.75,
  }
});
