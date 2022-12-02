import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/titulo';
import Principal from './src/components/principal';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo />
      <Principal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizonte: 15,
    backgroundColor: '#ff99cc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fonte: {
    color: '##4d001f',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
