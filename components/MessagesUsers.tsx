import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons';
import { messages } from '../data/messages';
import { parseDate } from '../utils/parseDate';
import Image from 'next/image';

export default function MessagesUsers() {
  return (
    <div className="p-3 text-light bg-primary rounded-4">
      <Row className="mb-3 align-items-center">
        <Col className="fw-bold">All Messages</Col>
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
      {messages.map((message) => {
        return (
          <React.Fragment key={`message-${message.id}`}>
            <Row className="align-items-center text-light">
              <Col>
                <div className="d-flex align-items-center">
                  <Image
                    alt="Avatar"
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    height="25px"
                    width="25px"
                    className="rounded-circle"
                  />
                  <span className="ms-2">{message.name}</span>
                </div>
              </Col>
              <Col className="d-flex justify-content-end align-items-center fs-7">
                <div className="text-light text-opacity-50">
                  {parseDate(message.messages.at(-1)!.date)}
                </div>
              </Col>
            </Row>
            <Row className="m-2 btn-transparent">
              <Col className="text-start p-0">
                <span className="text-light text-opacity-50 fs-7">
                  {message.messages.at(-1)!.text}
                </span>
              </Col>
            </Row>
            <div className="border-bottom border-secondary my-3"></div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
