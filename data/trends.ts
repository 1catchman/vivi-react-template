interface TagProps {
  name: string;
  tweetsAmount: string;
}

interface Props {
  id: number;
  section: string;
  tags: Array<TagProps>;
}

export const trends: Props[] = [
  {
    id: 1,
    section: 'Trending in Indonesia',
    tags: [
      {
        name: 'Minions',
        tweetsAmount: '97.7 k'
      },
      {
        name: 'SeninBarokah',
        tweetsAmount: '97.7 k'
      }
    ]
  },
  {
    id: 2,
    section: 'NFT • Trending',
    tags: [
      {
        name: 'Texos',
        tweetsAmount: '122.7 k'
      }
    ]
  },
  {
    id: 3,
    section: 'Football • Trending',
    tags: [
      {
        name: 'MUFC',
        tweetsAmount: '97.2 k'
      },
      {
        name: 'Rangnick',
        tweetsAmount: '77.2 k'
      },
      {
        name: 'ThxOle',
        tweetsAmount: '54.2 k'
      }
    ]
  }
];
