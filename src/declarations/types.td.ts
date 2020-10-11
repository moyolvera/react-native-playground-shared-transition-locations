export type StackParams = {
  Home: undefined;
  One: undefined;
  OneDetail: {
    item: OneDataItem;
  };
  Two: undefined;
  TwoDetail: {
    item: TwoDataItem;
  };
  Three: undefined;
  ThreeDetail: {
    item: ThreeDataItem;
  };
};

export type Location = {
  key: string;
  location: string;
  numberOfDays: number;
  image: string;
  color: string;
};

export type LocationList = Location[];

export type OneDataItem = {
  imageUri: string;
  title: string;
  id: string;
};

export type OneDataList = OneDataItem[];

export type TwoDataItem = { key: string; location: string; numberOfDays: number; image: string; color: string };

export type TwoDataList = TwoDataItem[];

export type ThreeDataItem = {
  key: string;
  image: string;
  name: string;
};

export type ThreeDataList = ThreeDataItem[];
