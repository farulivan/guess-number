import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

// on Android,  'screen' below means weight & height including statusbar, 'window' exluding statusbar. on Ios, two of theme is the same

const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
    // marginHorizontal: 24,

    //this is an example using devicewidth like media query in a web
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,

    borderRadius: 8,
    backgroundColor: Colors.secondary500,
    // android
    elevation: 4,
    // ios & android
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  text: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',

    //this is an example using devicewidth like media query in a web
    fontSize: deviceWidth < 380 ? 12 : 36,
  },
});
