import {Controller, useForm} from 'react-hook-form';
import {useUserContext} from '../hooks/ContextHooks';
import {Button, Keyboard, Text, TextInput, TouchableOpacity} from 'react-native';
import {Card} from '@rneui/themed';
import { Credentials } from '../Utils/types/localTypes';

const LoginForm = () => {
  const {handleLogin} = useUserContext();
  const initValues: Credentials = {username: '', password: ''};
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: initValues,
  });

  const doLogin = async (inputs: Credentials) => {
    await handleLogin(inputs);
  };

  return (
    <Card>
      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'username is required'},
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="username"
      />
      <Text>{errors.username?.message}</Text>

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: {value: true, message: 'password is required'},
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      <Text>{errors.password?.message}</Text>
      <Button title="Login" onPress={handleSubmit(doLogin)} />
    </Card>
  );
};

export default LoginForm;
