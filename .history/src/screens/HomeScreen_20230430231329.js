import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  const gradientRef = useRef();
  const color1 = '#FF512F';
  const color2 = '#DD2476';
  const animationDuration = 3000;

  useEffect(() => {
    const gradientAnimation = Animated.timing(
      gradientRef.current,
      {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: false,
      }
    );
    gradientAnimation.start();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        ref={gradientRef}
        colors={[color1, color2]}
        start={[0, 0.5]}
        end={[1, 0.5]}
        style={styles.gradient}
      />
      <Text style={styles.title}>NFT Generator Tool</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create NFT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
