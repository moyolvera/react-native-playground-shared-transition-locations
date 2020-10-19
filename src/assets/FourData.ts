import faker from 'faker';
import { FourDataList } from '../declarations/types.td';

const f = faker.seed(1);

export const FOUR_IMAGES = [
  'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixlib=rb-1.2.1&w=800&q=80',
  'https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=800&q=80',
  'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=800&q=80',
  'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=800&q=80',
  'https://images.unsplash.com/photo-1517957754642-2870518e16f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=800&q=80',
  'https://images.unsplash.com/photo-1546484959-f9a381d1330d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=800&q=80',
  'https://images.unsplash.com/photo-1548761208-b7896a6ff225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=800&q=80',
  'https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=800&q=80',
  'https://images.unsplash.com/photo-1548614606-52b4451f994b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=800&q=80',
  'https://images.unsplash.com/photo-1548600916-dc8492f8e845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=800&q=80',
];

const FOUR_DATA: FourDataList = [...Array(10).keys()].map((i) => {
  return {
    key: String(i),
    title: faker.name.jobTitle(),
    description: faker.commerce.productDescription(),
    location: faker.address.streetAddress(true),
    image: FOUR_IMAGES[i],
    user: {
      name: faker.name.findName(),
      avatar: faker.internet.avatar(),
      job: faker.name.jobType(),
      details: [
        {
          label: 'Shots',
          value: faker.random.number(400),
        },
        {
          label: 'Followers',
          value: faker.random.number(5000),
        },
        {
          label: 'Following',
          value: faker.random.number(2000),
        },
      ],
    },
  };
});

export default FOUR_DATA;
