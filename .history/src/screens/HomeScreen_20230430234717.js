import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import logo from '../../a'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NFT Generator Tool</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <BlurView style={styles.button} blurType="light" blurAmount={10}>
          <Text style={styles.buttonText}>Create NFT</Text>
        </BlurView>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <BlurView style={styles.button} blurType="light" blurAmount={10}>
          <Text style={styles.buttonText}>Settings</Text>
        </BlurView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
    overflow: 'hidden',
  },
  button: {
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
