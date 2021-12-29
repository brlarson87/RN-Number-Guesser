import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: 28,
        paddingHorizontal: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        borderRadius: 8
    }
});

export default Card;