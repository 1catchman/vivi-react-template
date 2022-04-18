import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MessagesText from '../components/MessagesText';
import Post from '../components/Posts';
import MessagesUsers from '../components/MessagesUsers';

export default function MessagesPage() {
  return (
    <React.Fragment>
      <Col className="p-0">
        <MessagesUsers />
      </Col>
      <Col sm={6}>
        <Row className="py-3 px-4 bg-primary rounded-4 rounded-bottom-right-0 rounded-bottom-left-0">
          <Col>
            <div className="d-flex align-items-center">
              <img
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
    </React.Fragment>
  );
}
