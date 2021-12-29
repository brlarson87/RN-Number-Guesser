import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Alert,
    Dimensions
 } from 'react-native';

import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors"

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
        
    }

    const resetInput = () => {
        setEnteredValue('');
        setConfirmed(false);
        Keyboard.dismiss();
    }

    const confirmNumber = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 
                        "Number has to be between 1 and 99.", 
                        [{text: "Okay", style: 'destructive', onPress: resetInput}]);
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    };

    let confirmedOutPut;
        if(confirmed) {
            confirmedOutPut = (
                <Card style={styles.summaryContainer}>
                    <Text>You Selected</Text>
                    <NumberContainer border={colors.accent} fontColor={colors.accent}>{selectedNumber}</NumberContainer>
                    <CustomButton 
                        backgroundColor={'#fff'} 
                        color={colors.accent}
                        text={"Start Game"}
                        functionality={props.startGame}
                        param={selectedNumber}
                        >Start Game</CustomButton>
                </Card>
            )
        }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
            
            <Card style={styles.inputContainer}>

                <Text style={styles.title}>Enter A Number</Text>

                <Input 
                    style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    keyboardType="number-pad" 
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    />

                <View style={styles.btnContainer}>

                    <CustomButton 
                        backgroundColor={colors.accent} 
                        color={'#fff'} 
                        functionality={resetInput}
                    >Reset
                    </CustomButton>
                    <CustomButton 
                        backgroundColor={colors.primary} 
                        color={'#fff'}
                        functionality={confirmNumber}
                    >Confirm
                    </CustomButton>

                </View>

            </Card>
                {confirmedOutPut}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        height: '100%',
        alignItems: 'center',
        backgroundColor: colors.accent,
        paddingTop: '15%'
    },
    inputContainer: {
        width: '80%',
        maxWidth: '95%', 
        minWidth: 300, 
        alignItems: 'center',
        marginTop: 25
    },
    title: {
        fontSize: 20,
        marginBottom: 15,
        fontFamily: 'open-sans-bold'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20
    },
    input: {
        width: 55,
        textAlign: 'center',
        fontSize: 22,
        color: colors.primary
    },
    summaryContainer: {
        marginTop: 20,
        width: 200,
        alignItems: 'center'
    }
});

export default StartGameScreen;