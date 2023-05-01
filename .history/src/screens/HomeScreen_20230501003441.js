import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../../assets/logo.png';

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <LinearGradient
      colors={['#8C52FF', '#7D3AFF']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>ArtGen</Text>
        <Text style={styles.description}>
          Generate unique NFTs for your digital assets using our tool. Choose from a variety of designs and customize them to your liking.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            <Text style={styles.buttonText}>Create NFT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </View>
        <Modal visible={isModalVisible} animationType="fade" transparent={true}>
          <TouchableOpacity style={styles.modalBackground} onPress={toggleModal}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Button 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Button 2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Button 3</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#A84AFC',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    opacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5, // Required for Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode:
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
