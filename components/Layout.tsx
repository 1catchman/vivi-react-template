import * as React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import Following from '../components/Following';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Vivi</title>
        <meta
          name="description"
          content="Social Media App using NextJS, Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <Row className="gap-3">
          <Col>
            <Row className="mb-3">
              <Col
                className="bg-primary rounded-4 p-0"
                style={{ minWidth: 290 }}
              >
                <ProfileCard />
              </Col>
            </Row>
            <Row>
              <Col className="bg-primary rounded-4 p-0">
                <Following />
              </Col>
            </Row>
          </Col>
          {children}
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
