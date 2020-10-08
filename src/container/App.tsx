import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import One from '../features/One/One';
import OneDetail from '../features/One/OneDetail';

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="OneDetail" component={OneDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
