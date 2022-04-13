import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AddPost from '../components/AddPost';
import Post from '../components/Posts';
import Trends from '../components/Trends';

export default function MessagesPage() {
  return (
    <React.Fragment>
      <Col sm={6}>
        <Row className="mb-3">
          <Col className="bg-primary rounded-4">
            <AddPost />
          </Col>
        </Row>
        <Post />
      </Col>
      <Col className="p-0">
        <Trends />
      </Col>
    </React.Fragment>
  );
}
