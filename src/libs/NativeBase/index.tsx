import { View, Text } from 'react-native';
import { NativeBaseProvider, NativeBaseProviderProps } from 'native-base';
import { theme } from './theme';

export default function NativeBase({ children }: NativeBaseProviderProps) {
  const config = {
    dependencies: {
      'linear-gradient': require("expo-linear-gradient").LinearGradient
    }
  };

  return (
    <NativeBaseProvider config={config} theme={theme}>
      {children}
    </NativeBaseProvider>
  );
}
