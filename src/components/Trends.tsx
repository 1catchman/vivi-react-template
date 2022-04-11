import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons';
import { trends } from '../data/trends';

export default function Trends() {
  return (
    <div className="p-3 text-light bg-primary rounded-4">
      <Row className="mb-3 align-items-center">
        <Col className="fw-bold">Trends for you</Col>
        <Col className="d-flex justify-content-end align-items-center">
          <div>
            <Button className="btn-transparent rounded-circle py-1 px-2">
              <FontAwesomeIcon
                icon={faGear}
                size="lg"
                className="text-blue"
              />
            </Button>
          </div>
        </Col>
      </Row>
      {trends.map((trend) => {
        return (
          <>
            <Row className="my-3">
              <Col className="text-light text-opacity-50 text-uppercase fs-7">
                {trend.section}
              </Col>
            </Row>
            {trend.tags.map((tag) => {
              return (
                <Button className="btn-transparent w-100 p-0">
                  <Row className="m-2">
                    <Col className="text-start p-0">
                      <div className="mb-1">{tag.name}</div>
                      <div className="text-light text-opacity-50 fs-7 ">
                        {tag.tweetsAmount} Tweets
                      </div>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center p-0">
                      <div>
                        <Button className="btn-transparent rounded-pill py-0 px-3">
                          <FontAwesomeIcon
                            icon={faEllipsis}
                            size="lg"
                          />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Button>
              );
            })}
            <div className="border-bottom border-secondary my-2"></div>
          </>
        );
      })}
      <a href="#" className="fw-bold small link">
        Show More
      </a>
    </div>
  );
}
