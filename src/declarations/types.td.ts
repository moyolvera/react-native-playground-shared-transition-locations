export type StackParams = {
  Four: undefined;
  FourDetail: {
    item: FourDataItem;
  };
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
  Playground: undefined;
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

export type FourUserDetailItem = {
  label: string;
  value: number;
};

export type FourUserDetailList = FourUserDetailItem[];

export type FourUserItem = {
  name: string;
  avatar: string;
  job: string;
  details: FourUserDetailList;
};

export type FourDataItem = {
  key: string;
  title: string;
  description: string;
  location: string;
  image: string;
  user: FourUserItem;
};

export type FourDataList = FourDataItem[];
