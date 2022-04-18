interface MessagesProps {
  id: number;
  text: string;
  date: string;
}

interface Props {
  id: number;
  name: string;
  messages: MessagesProps[];
}

export const messages: Props[] = [
  {
    id: 1,
    name: 'Elon Musk',
    messages: [
      {
        id: 1,
        text: 'Hello',
        date: 'Mon Apr 18 2022 16:20:12'
      },
      {
        id: 2,
        text: 'Hello2',
        date: 'Mon Apr 18 2022 17:20:12'
      },
      {
        id: 3,
        text: 'Hello3',
        date: 'Mon Apr 18 2022 18:20:12'
      },
      {
        id: 4,
        text: "Hello4 my friend, how's it going today",
        date: 'Mon Apr 18 2022 20:20:12'
      }
    ]
  }
];
