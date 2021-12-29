import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import colors from '../constants/colors';


const GamesOverScreen = props => {
  return (
    <View style={styles.screen}>
        <Text style={styles.heading}>Game Over</Text>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/success.png')} style={styles.image} />
        </View>
        <Text style={styles.sub}>The number was...</Text>
        <Text style={styles.sub}>{props.userNumber}</Text>
        <Text style={{...styles.sub, marginBottom: 25}}>It took {props.guessRounds} tries</Text>
        <CustomButton backgroundColor={colors.primary} color={'#fff'} functionality={props.restart}>Play Again</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        alignItems: 'center',
        paddingTop: '8%',
        backgroundColor: colors.accent
    },
    imageContainer: {
      width: 300,
      height: 300,
      borderRadius: 200,
      borderWidth: 3,
      borderColor: "#fff",
      overflow: 'hidden',
      marginBottom: 20
    },
    image: {
      width: '100%',
      height: '100%'
    },  
    heading: {
      fontSize: 24,
      textAlign: 'center',
      color: '#fff',
      marginBottom: 15,
      fontFamily: 'open-sans-bold'
    },
    sub: {
      fontSize: 20,
      textAlign: 'center',
      color: '#fff',
      marginVertical: 5,
      fontFamily: 'open-sans-bold'
    }
});

export default GamesOverScreen;