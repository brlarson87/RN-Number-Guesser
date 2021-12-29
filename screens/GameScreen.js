import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import colors from "../constants/colors";


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const renderListItem = (g, i) => {
  return (<View key={g} style={styles.listItem}>
            <Text>#{i}</Text>
            <Text>{g}</Text>
          </View>)
}

const GameScreen = props => {
  const initalGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  const [pastGuesses, setPastGuesses] = useState([initalGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if(currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver])

  const changeGuess = (option) => {
    if((option === 'lower' && currentGuess < userChoice) ||
       (option === 'greater' && currentGuess > userChoice) 
      ) {
      Alert.alert("Don't Lie!", "You that this is wrong...", [{ text: "Sorry", style: "cancel" }]);
      return;
    }

    if(option === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    
    setCurrentGuess(nextNumber);
    setPastGuesses(curGuesses => [nextNumber, ...curGuesses]);
  }

  return (
    <View style={styles.screen}>
      <Text style={{ color: "#fff"}}>Opponent's Guess</Text>
      <NumberContainer border={"#fff"} fontColor={'#fff'}>{currentGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
         <CustomButton 
          text={"LOWER"} 
          backgroundColor={colors.primary} 
          color={"#fff"} 
          functionality={changeGuess}
          param={'lower'}
         >
           <Ionicons name="md-remove" size={24} color="white" />
         </CustomButton> 

         <CustomButton 
          text={"GREATER"} 
          backgroundColor={colors.primary} 
          color={"#fff"} 
          functionality={changeGuess}
          param={'greater'}
          >
            <Ionicons name="md-add" size={24} color="white" />
          </CustomButton>  
      </Card>

      <View style={styles.list}>
        <ScrollView>
          { pastGuesses.map((g,i) => renderListItem(g, pastGuesses.length - i))}
        </ScrollView>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        padding: 10,
        alignItems: 'center',
        paddingTop: '8%',
        backgroundColor: colors.accent
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 250,
        maxWidth: '90%'
    },
    list: {
      flex: 1,
      width: '40%',
      marginTop: 15
    },
    listItem: {
      flexDirection: 'row',
      borderColor: "#ccc",
      paddingVertical: 15,
      paddingHorizontal: 25,
      marginVertical: 10,
      backgroundColor: '#fff',
      borderWidth: 2,
      justifyContent: 'space-between'
    }
});

export default GameScreen;