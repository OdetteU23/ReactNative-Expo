import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
//import Home from './src/views/Home';
import { UserProvider } from '@/context/UserContext';
import {PortalHost} from '@rn-primitives/portal';
import Navigator from './src/navigators/navigators';

export default function App() {
  console.log("Welcome to rnExpo!");
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <UserProvider>
            <Navigator />
          </UserProvider>
          <StatusBar style="auto" />
        </SafeAreaView>

        <PortalHost />
      </View>
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
