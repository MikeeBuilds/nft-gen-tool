import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <SafeView>
      <Text>NFT GENERATOR TOOL</Text>
      <StatusBar style="auto" />
    </SafeView>
  );
}

