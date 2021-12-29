import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const CustomButton = props => {
  let { 
    width = 100, 
    padding = 10, 
    backgroundColor = "#fff", 
    color = '#000',
    functionality,
    param
  } = props;  
  return (
    <TouchableOpacity onPress={() => functionality(param)}>
      <View style={{ width, padding, backgroundColor, alignItems: 'center' }}>
        <Text style={{ color }}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}


export default CustomButton;