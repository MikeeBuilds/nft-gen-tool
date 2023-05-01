import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../../assets/logo.png';

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#000', '#1c1c1c', '#2f2f2f', '#444444']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>ArtGen</Text>
        <Text style={styles.description}>
          Generate unique NFTs for your digital assets using our tool. Choose from a variety of designs and customize them to your liking.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create NFT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(0, 122, 255, 0.8)'',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
