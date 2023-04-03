import { StyleSheet, View, Pressable, ScrollView } from 'react-native';

import { Actionsheet, Box, Button, Icon, Text } from 'native-base';
import { Path } from 'react-native-svg';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type ScreenProps = {
  nextThemeName: string,
  toggleTheme: () => void
};

{/* <Icon viewBox="0 0 24 24" size="6" fill="none"><Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" /></Icon> */}

export default function ActionSheetShowcase({ nextThemeName, toggleTheme }: ScreenProps) {
  const data = [...Array(100)].map((_, index) => ({ key: index + 1, label: `Option ${index + 1}`, value: index + 1 }));

  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ActionSheet Showcase</Text>
        <Pressable onPress={toggleTheme}>
          <Text style={styles.title}>{nextThemeName === 'dark' ? '🌛' : '🌞'}</Text>
        </Pressable>
      </View>
      <Button onPress={onOpen}>Actionsheet</Button>
      {/* ...Component HERE... */}
      <Actionsheet
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        // disableOverlay
        // hideDragIndicator
        useRNModal
        >
        <Actionsheet.Content>
          <ScrollView style={{ width: '100%' }}>
            {data.map((item) => (
              <Actionsheet.Item key={item.key} startIcon={<Icon as={MaterialIcons} size="6" name="favorite" />}>
                {item.label}
              </Actionsheet.Item>
            ))}
          </ScrollView>
          {/* <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{ color: "gray.300" }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item startIcon={<Icon as={MaterialIcons} size="6" name="delete" />}>
            Delete
          </Actionsheet.Item>
          <Actionsheet.Item startIcon={<Icon as={MaterialIcons} name="share" size="6" />}>
            Share
          </Actionsheet.Item>
          <Actionsheet.Item startIcon={<Icon as={Ionicons} name="play-circle" size="6" />}>
            Play
          </Actionsheet.Item>
          <Actionsheet.Item startIcon={<Icon as={MaterialIcons} size="6" name="favorite" />}>
            Favourite
          </Actionsheet.Item>
          <Actionsheet.Item startIcon={<Icon viewBox="0 0 24 24" size="6" fill="none"><Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" /></Icon>}>
            Cancel
          </Actionsheet.Item> */}
        </Actionsheet.Content>
      </Actionsheet>
      {/* ...Component HERE... */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    paddingTop: 50,
    paddingBottom: 30,
    fontSize: 26,
    color: 'whitesmoke'
  }
});
