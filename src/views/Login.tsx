
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { useState } from 'react';
import { Button, View } from 'react-native';

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {showRegister ? <RegisterForm /> : <LoginForm />}
      <Button
        title={showRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
        onPress={() => setShowRegister((prev) => !prev)}
      />
    </View>
  );
};

export default Login;
