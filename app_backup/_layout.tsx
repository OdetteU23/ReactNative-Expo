import '../global.css';
import { PortalHost } from '@rn-primitives/portal';
import { UserProvider } from '@/context/UserContext';
import { UpdateProvider } from '@/context/UpdateContext';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <UserProvider>
      <UpdateProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
        <PortalHost />
      </UpdateProvider>
    </UserProvider>
  );
}
