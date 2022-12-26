import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

const GuessLogItem = ({ roundNumber, guessNumber }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.roundNumber}>#Round {roundNumber}</Text>
      <Text style={styles.guessNumber}>{guessNumber}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 8,
    // android
    elevation: 4,
    // ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  roundNumber: {
    fontFamily: 'rota-font',
    color: Colors.text500,
  },
  guessNumber: {
    fontFamily: 'rota-font',
    color: Colors.text600,
  },
});
