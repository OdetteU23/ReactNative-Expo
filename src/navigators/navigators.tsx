import {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Single from '../views/Single';
import Upload from '../views/Upload';
import Login from '../views/Login';
import { useUserContext } from '../hooks/ContextHooks';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="My Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  const {user, loading, handleAutoLogin} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <>
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Media File"
            component={Single}
            // options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
