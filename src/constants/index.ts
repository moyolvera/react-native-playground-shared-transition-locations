import { Dimensions } from 'react-native';

const DIMENSIONS = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

const SIZE = 64;
const ICON_SIZE = SIZE * 0.8;
const SPACING = 12;
const ITEM_WIDTH = DIMENSIONS.WIDTH * 0.68;
const ITEM_HEIGHT = ITEM_WIDTH * 1.5;
const RADIUS = 18;
const FULL_SIZE = ITEM_WIDTH + SPACING * 2;

const THREE_IMAGE_WIDTH = DIMENSIONS.WIDTH * 0.86;
const THREE_IMAGE_HEIGHT = THREE_IMAGE_WIDTH * 1.5;
const THREE_VISIBLE_ITEMS = 4;

export {
  DIMENSIONS,
  ICON_SIZE,
  SPACING,
  ITEM_WIDTH,
  ITEM_HEIGHT,
  RADIUS,
  FULL_SIZE,
  THREE_IMAGE_WIDTH,
  THREE_IMAGE_HEIGHT,
  THREE_VISIBLE_ITEMS,
};
