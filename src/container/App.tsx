import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Home, One, OneDetail } from '../features';
import { Easing, StatusBar } from 'react-native';
import { StackParams } from '../declarations/types.td';

const Stack = createSharedElementStackNavigator<StackParams>();

StatusBar.setBarStyle('dark-content');

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="One" component={One} />
        <Stack.Screen
          name="OneDetail"
          component={OneDetail}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: 'timing', config: { duration: 500, easing: Easing.inOut(Easing.ease) } },
              close: { animation: 'timing', config: { duration: 500, easing: Easing.inOut(Easing.ease) } },
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
