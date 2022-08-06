import Image from 'next/image';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function ProfileCard() {
  return (
    <Card
      style={{ width: '100%', borderRadius: '12px' }}
      text="white"
      bg="primary"
      className="border-0"
    >
      <Card.Img
        variant="top"
        src="https://images.pexels.com/photos/918781/pexels-photo-918781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        height="95px"
        width="100%"
        style={{ objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
        className="mb-5"
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '55px',
          transform: 'translate(-50%)'
        }}
      >
        <Image
          alt="Avatar"
          src="https://www.w3schools.com/howto/img_avatar.png"
          layout="fill"
          className="rounded-circle mx-auto"
        />
      </div>
      <Card.Body className="text-center">
        <Card.Title className="fw-bold">John Doe</Card.Title>
        <Card.Text className="text-light text-opacity-50">
          @johndoe
        </Card.Text>
        <Card.Text className="small">
          Some quick example text to build on the card title and make
          up the bulk of the card&apos;s content.
        </Card.Text>
      </Card.Body>
      <ListGroup
        horizontal={true}
        className="py-2 border-top border-bottom border-dark d-flex justify-content-center"
      >
        <ListGroupItem className="bg-primary border-0 text-center  d-flex flex-column px-4 w-100">
          <span className="text-white fw-bold">102</span>
          <span className="text-light text-opacity-50">
            Following
          </span>
        </ListGroupItem>
        <ListGroupItem className="bg-primary border-0 border-start border-dark text-center d-flex flex-column px-4 w-100">
          <span className="text-white fw-bold">6,661</span>
          <span className="text-light text-opacity-50">
            Followers
          </span>
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link
          className="fw-bold small link d-flex justify-content-center my-1"
          href="#"
        >
          My Profile
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
