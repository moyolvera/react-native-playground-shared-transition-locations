export type StackParams = {
  One: undefined;
  OneDetail: {
    item: OneDataItem;
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
