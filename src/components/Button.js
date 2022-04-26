import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4, // pega a largura da tela e divide por 4, assim formando 4 colunas
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
});

export default function Button({ onPress, label }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="#AAA">
      <Text style={styles.button}>{label}</Text>
    </TouchableHighlight>
  );
}
