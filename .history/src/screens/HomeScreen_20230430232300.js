import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>NFT Generator Tool</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create NFT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',  // push everything to the bottom
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingBottom: 30,  // add some padding at the bottom
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    buttonContainer: {
      flexDirection: 'row',  // align buttons horizontally
      justifyContent: 'space-around',  // evenly distribute space between buttons
      width: '100%',  // take up full width of screen
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
export default HomeScreen;
