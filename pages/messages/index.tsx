import type { NextPage } from 'next';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Layout from '@/components/Layout';
import MessagesUsers from '@/components/MessagesUsers';
import MessagesText from '@/components/MessagesText';

const Messages: NextPage = () => {
  return (
    <Layout>
      <Col className="p-0">
        <MessagesUsers />
      </Col>
      <Col sm={6}>
        <Row className="py-3 px-4 bg-primary rounded-4 rounded-bottom-right-0 rounded-bottom-left-0">
          <Col>
            <div className="d-flex align-items-center">
              <Image
                alt="Avatar"
                src="https://www.w3schools.com/howto/img_avatar.png"
                height="30px"
                width="30px"
                className="rounded-circle"
              />
              <span className="ms-2 text-light">Elon Musk</span>
            </div>
          </Col>
        </Row>
        <MessagesText />
      </Col>
    </Layout>
  );
};

export default Messages;
