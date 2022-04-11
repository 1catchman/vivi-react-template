interface Props {
  id: number;
  verify: boolean;
  name: string;
  username: string;
  date: string;
  avatar: string;
  text: string;
  img?: string;
  commentsAmount: string;
}

export const posts: Props[] = [
  {
    id: 1,
    verify: true,
    name: 'Elon Musk',
    username: 'elonmusk',
    date: 'Mon Apr 11 2022 10:19:09',
    avatar:
      'https://avatars.mds.yandex.net/i?id=45f7b4eced64975f47b9a0f974379187-4531654-images-thumbs&n=13&exp=1',
    text: 'I am inspired by curiosity.\n That is what drives me.\n So let us expand the scope & scale of consciousness so that we may aspire to understand the Universe.',
    commentsAmount: '45'
  },
  {
    id: 2,
    verify: false,
    name: 'Molly Lopez',
    username: 'mollylo64',
    date: 'Mon Apr 11 2022 13:17:37',
    avatar:
      'https://avatars.mds.yandex.net/i?id=6d3fea1331366400525629cb27211917-5551436-images-thumbs&n=13&exp=1',
    text: `my cat sleeping 😴`,
    img: 'https://pbs.twimg.com/media/FP9xfy2aQAAtmfa?format=jpg&name=small',
    commentsAmount: '19'
  },
  {
    id: 3,
    verify: true,
    name: 'Tony Hawk',
    username: 'tonyhawk',
    date: 'Mon Apr 11 2022 13:40:40',
    avatar:
      'https://avatars.mds.yandex.net/i?id=9b5de029953ad9c92efe6e4d02ceb40d-5118451-images-thumbs&n=13&exp=1',
    text: `This just happened, and maybe this is where it all ends:\n
    Got an elevator with 3 people.\n
    One guy (with his wife), sarcastically: “anyone ever tell you you…” and stops.\n
    Me (amused): yes, but you’re the first today.\n
    His wife: “I’m sorry, I tried to stop him from doing the joke”`,
    commentsAmount: '829'
  },
  {
    id: 4,
    verify: true,
    name: 'Logan Paul',
    username: 'loganpaul',
    date: 'Mon Apr 10 2022 13:40:40',
    avatar:
      'https://avatars.mds.yandex.net/i?id=e5a6e12012e1646c58677296ff278169-5529172-images-thumbs&n=13&exp=1',
    text: `dream come true. what a wild event`,
    img: 'https://pbs.twimg.com/media/FNHxmX1WUAIduSy?format=jpg&name=small',
    commentsAmount: '176'
  }
];
