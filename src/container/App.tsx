import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Icon name="activity" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
