import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../../assets/logo.png';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#FF6B6B', '#FFE66D', '#FF6B6B']}
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
          <Text style={styles.buttonText}>Creator Dashboard</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNavigationBar}>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Ionicons name="home-outline" size={28} color="#fff" />
          <Text style={styles.bottomBarButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Ionicons name="settings-outline" size={28} color="#fff" />
          <Text style={styles.bottomBarButtonText}>Settings</Text>
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
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A84AFC',
    borderWidth: 2,
    borderColor: '#A84AFC',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50,
    marginBottom: 20,
    shadowColor: '#A84AFC',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
  bottomNavigationBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#000',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomBarButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBarButtonText: {
    color: '#A84AFC',
    fontSize: 12,
  },
});

export default HomeScreen;
