import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import Button from './src/components/Button';

const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <Button label="AC" onPress={() => {}} />
        <Button label="/" onPress={() => {}} />
        <Button label="7" onPress={() => {}} />
        <Button label="8" onPress={() => {}} />
        <Button label="9" onPress={() => {}} />
        <Button label="*" onPress={() => {}} />
        <Button label="4" onPress={() => {}} />
        <Button label="5" onPress={() => {}} />
        <Button label="6" onPress={() => {}} />
        <Button label="-" onPress={() => {}} />
        <Button label="1" onPress={() => {}} />
        <Button label="2" onPress={() => {}} />
        <Button label="3" onPress={() => {}} />
        <Button label="+" onPress={() => {}} />
        <Button label="0" onPress={() => {}} />
        <Button label="." onPress={() => {}} />
        <Button label="=" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default App;
