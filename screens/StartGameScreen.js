import { useState } from 'react';
import { StyleSheet, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enteredNumber);

    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert('Invalid Number', 'Please choose a number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    console.log('Valid Number!');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        maxLength={2}
        keyboardType="number-pad"
        autoComplete="off"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
    shadowOffset: { width: 0, height: 2 },
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
