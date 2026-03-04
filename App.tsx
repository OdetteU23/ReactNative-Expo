import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
//import {Text, Platform } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//import Home from './src/views/Home';
import Navigator from './src/navigators/navigators';
import { UserProvider } from './src/context/UserContext';

export default function App() {
  console.log("Welcome to rnExpo!");
  return (
    <SafeAreaProvider style={styles.container}>
      <UserProvider>
        {/* <Home /> */}
        <Navigator />
        {/* <Text>Open up App.tsx to start working on your app!</Text> */}
        <StatusBar style="auto" />
      </UserProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: Platform.OS === 'android' ? 25 : 0, // Add padding for Android status bar
  },
});
