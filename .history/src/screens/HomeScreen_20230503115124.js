import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { FloatingAction } from "react-native-floating-action";
import Icon from "react-native-vector-icons/FontAwesome";
import logo from "../../assets/logo.png";


const actions = [
  {
    text: "View Contracts",
    icon: <Icon name="file-o" size={20} color="white" />,
    name: "create_nft",
    position: 1,
  },
  {
    text: "Settings",
    icon: <Icon name="cog" size={20} color="white" />,
    name: "settings",
    position: 2,
  },
  {
    text: "Profile",
    icon: <Icon name="user" size={20} color="white" />,
    name: "profile",
    position: 3,
  },
];

const HomeScreen = () => {
    
  return (
    <LinearGradient
      colors={["#FF6B6B", "#FFE66D", "#FF6B6B"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>ArtiGen</Text>
        <Text style={styles.description}>
        Unlock endless possibilities for your NFT collection with our ArtiGen tool. 
        Seamlessly generate unique NFTs from your pre-existing layers without any hassle. 
        Stand out in the crowded NFT market with our powerful tool, designed for creators by creators.
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
          <Text style={styles.bottomBarButtonText}></Text>
        </TouchableOpacity>
      </View>
      <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          console.log(`Selected ${name}`);
        }}
        color="#A84AFC"
        distanceToEdge={20}
        floatingIcon={<Ionicons name="menu" size={28} color="#fff" />}
        overlayColor="#fff"
        position="right"
        showBackground={false}
      />
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 18,
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
});

export default HomeScreen;
