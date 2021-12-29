import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'
import GamesOverScreen from './screens/GamesOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded) {
    return <AppLoading 
            startAsync={fetchFonts} 
            onFinish={() => setDataLoaded(true)}
            onError={(err) => console.log(err)} 
            />
  }

  const startGame = num => {
    setUserNumber(num);
    setGuessRounds(0);
  } 
 
  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  const restart = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let content = <StartGameScreen startGame={startGame}/>

  if(userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0) {
    content = <GamesOverScreen guessRounds={guessRounds} userNumber={userNumber} restart={restart} />
  }

  return (
    <View>
      <Header title={"Guess A Number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
 
});
