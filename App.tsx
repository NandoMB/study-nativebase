import { StatusBar } from 'expo-status-bar';
import { useColorMode } from 'native-base';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import useTheme from './src/hooks/useTheme';
import NativeBase from './src/libs/NativeBase';
import ActionSheetShowcase from './src/screens/showcase/ActionSheet';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const getInvertedTheme = () => theme === 'dark' ? 'light' : 'dark';

  return (
    <NativeBase>
      <SafeAreaView style={styles.container}>
        <ActionSheetShowcase nextThemeName={getInvertedTheme()} toggleTheme={toggleTheme}  />
        <StatusBar style={theme ?? 'auto'} />
      </SafeAreaView>
    </NativeBase>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#d5d5d5',
    backgroundColor: '#111111',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


