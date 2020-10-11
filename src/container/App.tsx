import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Home, One, OneDetail, Two, TwoDetail, Three, ThreeDetail } from '../features';
import { StackParams } from '../declarations/types.td';
import { transitionSpec, cardStyleInterpolator } from './NavigationConfig';

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
            transitionSpec,
            cardStyleInterpolator,
          })}
        />
        <Stack.Screen name="Two" component={Two} />
        <Stack.Screen
          name="TwoDetail"
          component={TwoDetail}
          options={() => ({
            gestureEnabled: false,
            transitionSpec,
            cardStyleInterpolator,
          })}
        />
        <Stack.Screen name="Three" component={Three} />
        <Stack.Screen
          name="ThreeDetail"
          component={ThreeDetail}
          options={() => ({
            gestureEnabled: false,
            transitionSpec,
            cardStyleInterpolator,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
