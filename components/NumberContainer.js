import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from "../constants/colors"

const NumberContainer = props => {
  return (
    <View style={{...styles.container, borderColor: props.border}}>
      <Text style={{...styles.number, color: props.fontColor}}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 8,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70
    },
    number: {
        fontSize: 24
    }
});

export default NumberContainer;