import { useEffect, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/InstructionText';
import Card from '../components/ui/Card';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialState = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialState);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessNumber = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!!", "I know you're lying dude!", [
        {
          text: 'Sorry',
          style: 'cancel',
        },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    }

    if (direction === 'greater') {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
    return;
  };

  return (
    <View style={styles.rootContainer}>
      <Card>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <InstructionText style={styles.dialog}>
          I think this is not your number. Is your number lower or greater?
        </InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessNumber.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessNumber.bind(this, 'greater')}>
            +
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 24,
    marginTop: 44,
  },
  dialog: {
    marginTop: 20,
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.secondary600,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
