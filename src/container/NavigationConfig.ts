import { StackCardInterpolationProps, TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
import { Easing } from 'react-native';

const transitionSpec: {
  open: TransitionSpec;
  close: TransitionSpec;
} = {
  open: { animation: 'timing', config: { duration: 500, easing: Easing.inOut(Easing.ease) } },
  close: { animation: 'timing', config: { duration: 500, easing: Easing.inOut(Easing.ease) } },
};

const cardStyleInterpolator = ({ current: { progress } }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: progress,
  },
});

export { cardStyleInterpolator, transitionSpec };
