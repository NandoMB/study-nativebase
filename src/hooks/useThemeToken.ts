import { useTheme } from 'native-base';


export default function useThemeToken() {
  const themeTokens = useTheme();
  return { ...themeTokens };
}
