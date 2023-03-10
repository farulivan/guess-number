import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ onPickNumber }) => {
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

    onPickNumber(chooseNumber);
  };

  return (
    // in Course this code below used, but in this project better not use it
    // <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} 
        // you can try to use behaviour
        // behavior='position'
      >
        <View style={styles.rootContainer}>
          <Card>
            <Title style={styles.title}>Guess My Number</Title>
            <InstructionText>
              Choose a number. The opponent will try to guess your number.
            </InstructionText>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                maxLength={2}
                keyboardType='number-pad'
                autoComplete='off'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <View style={styles.button}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    // </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    margin: 24,
    marginTop: 44,
  },
  title: {
    marginVertical: 30,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputText: {
    marginVertical: 8,
    height: 50,
    width: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    color: Colors.secondary600,
    borderBottomColor: Colors.secondary600,
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
