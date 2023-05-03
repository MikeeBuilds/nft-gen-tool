import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { FloatingAction } from "react-native-floating-action";
import Icon from "react-native-vector-icons/FontAwesome";
import logo from "../../assets/logo.png";
import { Web3ModalProvider, useWeb3Modal } from "@web3modal/react";
import { ethers } from "ethers";


    fontWeight: "bold",
    color: "#fff",

    textAlign: "center",
    marginBottom: 20,
    backgroundColor: "#A84AFC",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 86.25,
    shadowRadius: 3.84,
  
    elevation: 5,
  },
  
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 86.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 18,
    color: "#FF6B6B",
    fontWeight: "bold",

    fontWeight: "bold",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  bottomNavigationBar: {
    flexDirection: "row",
    height: 90,
    backgroundColor: "#000",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomBarButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBarButtonText: {
    color: "#A84AFC",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    width: "100%",
  },
});

export default HomeScreen;
