import { Text, View } from "react-native";
import { useUserContext } from "../hooks/ContextHooks";
import { Button } from "@rneui/themed";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const {user, handleLogout} = useUserContext();
  const onRemoveToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      console.error('Error removing token:', error);
    }
  };
    const handleLogoutAndRemoveToken = () => {
      handleLogout();
      onRemoveToken();
    };
  return (
    <View>
      <Text>{user?.username}</Text>
      {/* TODO: add more user details = HomeWork */}

      <Button onPress={handleLogoutAndRemoveToken}>
        <Text>Logout</Text>
      </Button>
      {/*
       <Button onPress={() => console.log('user', user)}>
          <Text>Show User</Text>
        </Button>
      */}

    </View>
  );
};

export default Profile;
