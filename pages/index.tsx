import React from 'react';
import prisma from '@/lib/prisma';
import { GetStaticProps } from 'next';
import { Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import AddPost from '../components/AddPost';
import Trends from '../components/Trends';
import Posts from '../components/Posts';

type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

type Props = {
  feed: PostProps[];
  users: {
    name: string;
    email: string;
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.user.findMany();
  return {
    props: { feed },
    revalidate: 10
  };
};

const Home: React.FC<Props> = (props) => {
  console.log(props.feed);
  return (
    <Layout>
      <Col sm={6}>
        <Row className="mb-3">
          <Col className="bg-primary rounded-4">
            <AddPost />
          </Col>
        </Row>
        <Posts />
      </Col>
      <Col className="p-0">
        <Trends />
      </Col>
    </Layout>
  );
};

export default Home;
