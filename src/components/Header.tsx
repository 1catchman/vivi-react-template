import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  Form,
  FormControl,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHashtag,
  faHouse,
  faEnvelope,
  faBell
} from '@fortawesome/free-solid-svg-icons';

interface stateProps {
  [x: string]: boolean;
}

const initialState = {
  home: false,
  messages: false
};

export default function Header() {
  const [state, setState] = useState<stateProps>({
    ...initialState,
    home: true
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setState({
      ...initialState,
      [event.currentTarget.id]: true
    });
  };

  return (
    <Navbar bg="bg" expand="lg" className="header">
      <Container className="my-4">
        <Navbar.Brand href="#home">
          <span className="text-light text-uppercase fs-3">Vivi</span>
        </Navbar.Brand>
        <Form className="d-flex header-search my-auto">
          <FontAwesomeIcon
            icon={faHashtag}
            className="hashtag-icon"
            size="lg"
          />
          <FormControl
            type="search"
            placeholder="Explore"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              to="/"
              className="header-btn me-2 px-3 text-decoration-none"
              title="Home"
              id="home"
              role="button"
              active={state.home}
              as={Link as any}
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faHouse} size="lg" />
              <span className="fw-bold text-primary ms-2 small">
                Home
              </span>
            </Nav.Link>
            <Nav.Link
              to="/messages"
              className="header-btn mx-2 px-3 text-decoration-none"
              title="Messages"
              id="messages"
              role="button"
              active={state.messages}
              as={Link as any}
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />

              <span className="fw-bold text-primary ms-2 small">
                Messages
              </span>
            </Nav.Link>
            <Nav.Link
              role="button"
              className="header-notifications text-light mx-2 px-3 text-decoration-none"
              active={false}
              title="Notifications"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faBell} size="lg" />
            </Nav.Link>

            <div className="vr text-light"></div>
            <NavDropdown
              title={
                <>
                  <img
                    className="rounded-circle me-2"
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="Avatar"
                    style={{ width: 30, height: 30 }}
                  />
                  <span className="small">John Doe</span>
                </>
              }
              id="basic-nav-dropdown"
              bsPrefix="text-light text-decoration-none"
              className="my-auto mx-3 bg-primary p-1 rounded-pill"
            >
              <NavDropdown.Item href="#action/3.1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
