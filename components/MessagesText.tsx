import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage,
  faCirclePlay,
  faFaceSmile
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function MessagesText() {
  return (
    <React.Fragment>
      <div className="bg-secondary mnx-1 px-5 h-100">
        <div className="d-flex py-3">
          <div className="d-flex align-items-end mb-1">
            <Image
              alt="Avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              height="40px"
              width="40px"
              className="rounded-circle"
            />
          </div>
          <div className="d-flex flex-column px-3">
            <div
              className=" rounded-bottom-left-0 bg-primary p-3"
              style={{ borderRadius: 20 }}
            >
              <span className="text-light small">
                Hello dude, how are you?
              </span>
            </div>
            <div className="text-light text-opacity-50 fs-7">
              Message sent 1:12pm
            </div>
          </div>
        </div>
        <div className="d-flex flex-row-reverse py-3">
          <div className="d-flex align-items-end mb-1">
            <Image
              alt="Avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              height="40px"
              width="40px"
              className="rounded-circle"
            />
          </div>
          <div className="d-flex flex-column px-3">
            <div
              className="rounded-bottom-right-0 bg-blue p-3 text-end"
              style={{ borderRadius: 20 }}
            >
              <span className="text-white small">
                Hello dude, how are you?
              </span>
            </div>
            <div className="text-light text-opacity-50 fs-7 text-end">
              Message sent 1:12pm
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
