import React, { useState } from 'react';
import { Col, Row, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage,
  faCirclePlay,
  faFaceSmile
} from '@fortawesome/free-solid-svg-icons';

export default function AddPost() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(280);
  const inputHandler = (
    event: React.FormEvent<HTMLTextAreaElement>
  ) => {
    const element = event.currentTarget;
    element.style.height = '1px';
    element.style.height = element.scrollHeight + 'px';
    console.log(element.value.toString());
    setCount(280 - element.textLength);
  };

  const submitHandler = (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    console.log(text || 'notext');
  };

  return (
    <Row className="py-3 px-1">
      <Col sm={1} className="me-3">
        <img
          alt="Avatar"
          src="https://www.w3schools.com/howto/img_avatar.png"
          height="60px"
          width="60px"
          className="rounded-circle"
        />
      </Col>
      <Col>
        <Row className="m-0 mb-3">
          <Form className="p-0" style={{ position: 'relative' }}>
            <FormControl
              as="textarea"
              placeholder="What's happening?"
              aria-label="Add Post"
              rows={1}
              className="form-control py-3 w-100 border-0 bg-secondary text-light overflow-hidden"
              maxLength={280}
              onInput={inputHandler}
              style={{
                minHeight: 56,
                borderRadius: 12,
                resize: 'none'
              }}
            />
            <Form.Text
              muted
              style={{
                fontSize: 12,
                position: 'absolute',
                bottom: 0,
                right: '1rem'
              }}
            >
              Characters left:{' '}
              <span className="text-light me-1">{count}</span>
            </Form.Text>
          </Form>
        </Row>
        <div className="d-flex justify-content-between">
          <div className="me-1">
            <Button
              className="btn-transparent text-center py-2 rounded-pill border border-secondary"
              style={{ minWidth: 130 }}
            >
              <FontAwesomeIcon
                icon={faImage}
                size="lg"
                className="text-success"
              />
              <span className="ms-2 text-light small">Media</span>
            </Button>
          </div>
          <div className="me-1">
            <Button
              className="btn-transparent text-center py-2 rounded-pill border border-secondary"
              style={{ minWidth: 130 }}
            >
              <FontAwesomeIcon
                icon={faCirclePlay}
                size="lg"
                className="text-info"
              />
              <span className="ms-2 text-light small">Gif</span>
            </Button>
          </div>
          <div className="me-1">
            <Button
              className="btn-transparent text-center py-2 rounded-pill border border-secondary"
              style={{ minWidth: 130 }}
            >
              <FontAwesomeIcon
                icon={faFaceSmile}
                size="lg"
                className="text-warning"
              />
              <span className="ms-2 text-light small">Emoji</span>
            </Button>
          </div>
          <div>
            <Button
              type="submit"
              onSubmit={submitHandler}
              className="btn-white rounded-pill px-5 py-2"
            >
              <span className="fw-bold small text-primary">Post</span>
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
