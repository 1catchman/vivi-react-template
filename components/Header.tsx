import React, { useState } from 'react';
import Link from 'next/link';
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
import Image from 'next/image';

interface stateProps {
  [x: string]: boolean;
}

const initialState = {
  home: false,
  messages: false
};

const Header: React.FC = () => {
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
          <Nav className="ms-auto header-nav">
            <Link href="/" passHref>
              <Nav.Link
                className="header-btn me-2 px-3 text-decoration-none d-flex justify-content-center align-items-center"
                title="Home"
                id="home"
                role="button"
                active={state.home}
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faHouse} size="lg" />
                <span className="fw-bold text-primary ms-2 small">
                  Home
                </span>
              </Nav.Link>
            </Link>
            <Link href="/messages" passHref>
              <Nav.Link
                className="header-btn mx-2 px-3 text-decoration-none d-flex justify-content-center align-items-center"
                title="Messages"
                id="messages"
                role="button"
                active={state.messages}
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" />

                <span className="fw-bold text-primary ms-2 small">
                  Messages
                </span>
              </Nav.Link>
            </Link>
            <Nav.Link
              role="button"
              className="header-notifications text-light mx-2 px-3 text-decoration-none d-flex justify-content-center align-items-center"
              active={false}
              title="Notifications"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faBell} size="lg" />
            </Nav.Link>

            <div className="vr text-light"></div>
            <div className="d-flex align-items-center mx-3 header-link">
              <Link href="/api/auth/signin" passHref>
                <a className="fw-bold small link">Login</a>
              </Link>
            </div>
            {/* <NavDropdown
              title={
                <div className="d-flex justify-content-center align-items-center">
                  <Image
                    className="rounded-circle"
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="Avatar"
                    height="30px"
                    width="30px"
                  />
                  <span className="small ms-2">John Doe</span>
                </div>
              }
              id="basic-nav-dropdown"
              bsPrefix="text-light text-decoration-none"
              className="my-auto mx-3 bg-primary p-1 rounded-pill header-profile"
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
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
