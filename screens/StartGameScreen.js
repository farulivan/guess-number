import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        maxLength={2}
        keyboardType='number-pad'
        autoComplete='off'
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#405B66',
    borderRadius: 8,
    // android
    elevation: 4,
    // ios & android
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6, 
    shadowOpacity: 0.25,
  },
  inputText: {
    marginVertical: 8,
    height: 50,
    width: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    color: '#F2CB05',
    borderBottomColor: '#F2CB05',
    borderBottomWidth: 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 18,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});
