import { StyleSheet, Text, View, Image } from 'react-native';
import Title from '../components/ui/Title';

import Card from '../components/ui/Card';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Card style={styles.card}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/images/finish.jpg')}
          />
        </View>
        <Text style={styles.summaryText}>
          The opponent needed{' '}
          <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to
          guess your number{' '}
          <Text style={styles.highlightText}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Play Again</PrimaryButton>
      </Card>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 24,
    marginTop: 44,
  },
  card: {
    justifyContent: 'center',
  },
  imageContainer: {
    width: 280,
    height: 280,
    overflow: 'hidden',
    //use BorderRadius half of width and height to make a circle
    borderRadius: 140,
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'rota-font',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 24,
    color: Colors.text500,
  },
  highlightText: {
    fontFamily: 'linked-now',
    color: Colors.secondary600,
  },
});
