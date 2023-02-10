import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/InstructionText';
import Card from '../components/ui/Card';
import GuessLogItem from '../components/game/GuessLogItem';

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
  const [guessLog, setGuessLog] = useState([initialState]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessLog.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessLog((currentLog) => [newRndNumber, ...currentLog]);
    return;
  };

  //Implement different return code adapt to screen orientation
  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <InstructionText style={styles.dialog}>
        I think this is not your number. Is your number lower or greater?
      </InstructionText>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={nextGuessNumber.bind(this, 'lower')}>
            <Ionicons name='md-remove' size={24} />
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={nextGuessNumber.bind(this, 'greater')}>
            <Ionicons name='md-add' size={24} />
          </PrimaryButton>
        </View>
      </View>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <InstructionText style={styles.dialog}>
          I think this is not your number. Is your number lower or greater?
        </InstructionText>
        <View style={styles.buttonContainerWide}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, 'greater')}>
              <Ionicons name='md-add' size={24} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <Card>
        <Title>Opponent's Guess</Title>
        {content}
        <View style={styles.flatListContainer}>
          <FlatList
            data={guessLog}
            renderItem={({ item, index }) => (
              <GuessLogItem
                roundNumber={guessLog.length - index}
                guessNumber={item}
              />
            )}
            keyExtractor={(item) => item}
          />
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
    flexDirection: 'row',
    marginTop: 18,
  },
  buttonContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  flatListContainer: {
    flex: 1,
    padding: 16,
  },
});
