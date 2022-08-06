import React, { useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpFromBracket,
  faCircleCheck,
  faEllipsis,
  faHeart,
  faRetweet
} from '@fortawesome/free-solid-svg-icons';
import { posts } from '../data/posts';
import { parseDate } from '../utils/parseDate';
import Image from 'next/image';

const Posts: React.FC = () => {
  return (
    <React.Fragment>
      {posts
        .sort((o1, o2) =>
          new Date(o1.date).getTime() < new Date(o2.date).getTime()
            ? 1
            : -1
        )
        .map((post) => {
          return (
            <Row className="mb-3" key={`post-${post.id}`}>
              <Col className="bg-primary rounded-4">
                <Row key={post.id} className="py-3 px-1">
                  <Col sm={1} className="me-3">
                    <Image
                      alt="Avatar"
                      src={post.avatar}
                      height="60px"
                      width="60px"
                      className="rounded-circle"
                      objectFit="cover"
                    />
                  </Col>
                  <Col>
                    <div className="w-100 d-flex">
                      <div className="me-2">
                        <a
                          href="#"
                          className="fw-bold link text-light"
                        >
                          {post.name}
                        </a>
                      </div>
                      {post.verify ? (
                        <div className="me-2">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-blue"
                          />
                        </div>
                      ) : null}
                      <div>
                        <a
                          href="#"
                          className="link text-light  text-opacity-50 small"
                        >
                          @{post.username}
                        </a>
                      </div>
                      <div className="ms-auto">
                        <Button className="btn-transparent rounded-pill py-0 px-3">
                          <FontAwesomeIcon
                            icon={faEllipsis}
                            size="lg"
                            className="text-light"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="text-light text-opacity-50 fs-7 mb-2">
                      {parseDate(post.date)}
                    </div>
                    <div className="mb-2">
                      {post.text.split('\n').map((line, index) => (
                        <React.Fragment
                          key={`${post.username}-post-${post.id}-text-content-${index}`}
                        >
                          <p className="m-0 small text-light">
                            {line}
                          </p>
                        </React.Fragment>
                      ))}
                    </div>
                    {post.img ? (
                      <div className="rounded-4 mb-2 position-relative">
                        <Image
                          src={post.img}
                          alt={post.name}
                          layout="fill"
                          style={{ borderRadius: 12 }}
                          loading="lazy"
                          objectFit="cover"
                        />
                      </div>
                    ) : null}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-2 align-items-center">
                        <Button className="btn py-1 px-2 rounded-circle">
                          <FontAwesomeIcon
                            icon={faHeart}
                            width={16}
                            height={16}
                            className="text-danger"
                          />
                        </Button>
                        <Button className="btn py-1 px-2 rounded-circle">
                          <FontAwesomeIcon
                            icon={faRetweet}
                            width={16}
                            height={16}
                            className="text-success"
                          />
                        </Button>
                        <Button className="btn py-1 px-2 rounded-circle">
                          <FontAwesomeIcon
                            width={16}
                            height={16}
                            icon={faArrowUpFromBracket}
                            className="text-info"
                          />
                        </Button>
                        {/* <span className="text-light text-opacity-50 small">
                241k
              </span> */}
                      </div>
                      <div>
                        <a
                          href="#"
                          className="fw-bold small link text-light text-opacity-75"
                        >
                          {post.commentsAmount} Comments
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
    </React.Fragment>
  );
};

export default Posts;
