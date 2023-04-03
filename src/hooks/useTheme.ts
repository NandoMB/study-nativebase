import { useColorMode as useColorModeNativeBase, useTheme as useThemeNativeBase } from 'native-base';

export default function useTheme() {
  const {
    colorMode: theme,
    toggleColorMode: toggleTheme
  } = useColorModeNativeBase();
  return {
    theme,
    toggleTheme
  };
}
