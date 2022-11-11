import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world</Text>
      <Text style={styles.message}>Esse é meu primeiro app react native por conta própria</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4e4e4e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ccc',
    fontSize: 30,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
  },
});
