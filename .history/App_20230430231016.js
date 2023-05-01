import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <View className="">
      <Text>NFT GENERATOR TOOL</Text>
      <StatusBar style="auto" />
    </View>
  );
}

