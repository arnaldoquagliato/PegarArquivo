/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  Button
} from 'react-native';

const { PegaArquivo } = NativeModules
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const NewModuleButton = () => {
  const onPress = () => {
    PegaArquivo.createCalendarEvent('arnaldo', 'testearnaldomodulo')
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};


const PegarArquivo = () => {
 

  return (
    <View>
      <NewModuleButton />
    </View>
  );
};

export default App;
