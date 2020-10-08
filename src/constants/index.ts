import { Dimensions } from 'react-native';

const DIMENSIONS = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

const SIZE = 64;
const ICON_SIZE = SIZE * 0.8;
const SPACING = 12;
const ITEM_WIDTH = DIMENSIONS.WIDTH * 0.68;

export { DIMENSIONS, ICON_SIZE, SPACING, ITEM_WIDTH };
