import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/colors';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed ]
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
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
    // android
    elevation: 4,
    // ios & android
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  innerContainer: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    backgroundColor: Colors.primary500,
    paddingVertical: 6,
    paddingHorizontal: 18,
    elevation: 2,
  },
  text: {
    color: Colors.text500,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // ios
  pressed: {
    opacity: 0.75,
  },
});
