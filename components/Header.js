import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from "../constants/colors"

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    backgroundColor: colors.primary,
    paddingTop: 36,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'open-sans-bold'
  }
});

export default Header;