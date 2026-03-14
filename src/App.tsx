import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
//import {Text, Platform } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
//import Home from './src/views/Home';
import Navigator from './navigators/navigators';
import { UserProvider } from './context/UserContext';
import { UpdateProvider } from './context/UpdateContext';

const App = () => {
  //console.log('First app version working!!');
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <UserProvider>
          <UpdateProvider>
            <Navigator />
          </UpdateProvider>
        </UserProvider>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

export default App;
