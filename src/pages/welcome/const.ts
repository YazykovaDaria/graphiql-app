import { IPresentationProps } from '../../components/Explanation/Presentation';

export const members = [
  {
    name: 'Yazykova Daria',
    image: 'https://avatars.githubusercontent.com/u/93446641?v=4',
    gitHub: 'https://github.com/YazykovaDaria',
  },
  {
    name: 'Kostya Yurkevich',
    image: 'https://avatars.githubusercontent.com/u/58595156?v=4',
    gitHub: 'https://github.com/Doooodie',
  },
  {
    name: 'Ivan Bobrik',
    image:
      'https://cdn.palobby.com/ui/main/shared/img/commanders/thumbs/img_raptor_nemicus_thumb.png',
    gitHub: 'https://github.com/ivan52945',
  },
];

type IExplanationInput = {
  name: string;
  content: IPresentationProps;
};

export const explList: IExplanationInput[] = [
  {
    name: 'needed',
    content: {
      code: `{\n  hero {\n    name\n    height\n    mass\n  }\n}`,
      aside: `{\n  "hero": {\n   "name": "Luke",\n   "height": 1.72,\n   "mass": 77 \n }\n}`,
    },
  },
  {
    name: 'single',
    content: {
      code: `{\n  hero {\n    name\n    friend {\n      name\n    }\n  }\n}`,
      aside: `{\n  "hero" {\n    "name": "Luke"\n    "friends": [\n      "name": "Obivan Kenobi",\n      "name": "R2 D2",\n      "name": "Han Solo",\n      "name": "Leia Organa",\n    ]\n  }\n}`,
    },
  },
  {
    name: 'types',
    content: {
      code: `{\n  hero {\n    name\n    friends {\n      name\n      homeWorld {\n        name\n        climate\n      }\n      species {\n        name\n        lifespan\n        origin {\n          name\n        }\n      }\n    }\n  }\n}`,
      aside: `type Query {\n  hero: Character\n}\n\ntype Character {\n  name: String\n  friends: [Character]\n  homeWorld: Planet\n  species: Species\n}\n\ntype Planet {\n  name: String\n  climate: String\n}\n\ntype Species {\n  name: String\n  lifespan: Int\n  origin: Planet\n}`,
    },
  },
];
