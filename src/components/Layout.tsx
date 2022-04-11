import { Container, Row, Col } from 'react-bootstrap';
import Following from './Following';
import ProfileCard from './ProfileCard';
import AddPost from './AddPost';
import Post from './Posts';
import Trends from './Trends';

export default function Layout() {
  return (
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
      </Row>
    </Container>
  );
}
