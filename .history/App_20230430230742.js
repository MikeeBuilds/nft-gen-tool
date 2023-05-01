import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default function App() {
  return (
    <View className="mx-auto">
      <Text>NFT GENERATOR TOOL</Text>
      <StatusBar style="auto" />
    </View>
  );
}

