import { extendTheme } from 'native-base';


export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  colors: {
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    }
  },
  // space: {
  //   'space-2': '29px',
  // },
  components: {
    // Button: {
    //   variants: {
    //     brand: {
    //       p: '10',
    //       bg: 'brand.500'
    //     }
    //   }
    // }
    Actionsheet: {
      // _dragIndicator , _dragIndicatorWrapper and _dragIndicatorWrapperOffSet
      baseStyle: () => ({
        // alignItems: 'center',
        // px: 2,
        // py: 2,
        // borderRadius: 'none',
        // roundedTop: 20,
        // _web: {
        //   userSelect: 'none',
        // },
        // _dragIndicator: {
        //   height: 1,
        //   width: 10,
        //   borderRadius: 2,
        //   bg: 'muted.500',
        // },
        // _dark: {
        //   _dragIndicator: {
        //     bg: 'muted.400',
        //   },
        // },
        // _dragIndicatorWrapper: {
        //   pt: 3,
        //   pb: 3,
        //   mt: -2,
        //   width: '100%',
        //   alignItems: 'center',
        //   collapsable: false,
        // },
        // _dragIndicatorWrapperOffSet: {
        //   py: 2,
        //   collapsable: false,
        // },
      }),
      defaultProps: {
        // size: 'full',
        // justifyContent: 'flex-end',
        // animationPreset: 'slide',
      }
    }
  }
});

type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
