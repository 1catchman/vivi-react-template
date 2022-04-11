import { Container, Stack, Button } from 'react-bootstrap';

export default function Following() {
  return (
    <Container className="p-3">
      <span className="text-light fw-bold">Who is to follow you</span>
      <Stack direction="horizontal" gap={3} className="my-4">
        <div>
          <img
            alt="Avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            height="55px"
            width="55px"
            className="rounded-circle"
          />
        </div>
        <div className="d-flex flex-column">
          <span className="text-light fw-bold">Product Hunt</span>
          <span className="text-light text-opacity-50 small">
            @ProductHunt
          </span>
        </div>
        <div className="ms-auto">
          <Button
            type="button"
            className="btn-white rounded-pill px-3"
          >
            <span className="fw-bold fs-7 text-primary">Follow</span>
          </Button>
        </div>
      </Stack>
      <Stack direction="horizontal" gap={3} className="my-4">
        <div>
          <img
            alt="Avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            height="55px"
            width="55px"
            className="rounded-circle"
          />
        </div>
        <div className="d-flex flex-column">
          <span className="text-light fw-bold">Product Hunt</span>
          <span className="text-light text-opacity-50 small">
            @ProductHunt
          </span>
        </div>
        <div className="ms-auto">
          <Button
            type="button"
            className="btn-white rounded-pill px-3"
          >
            <span className="fw-bold fs-7 text-primary">Follow</span>
          </Button>
        </div>
      </Stack>
      <Stack direction="horizontal" gap={3} className="my-4">
        <div>
          <img
            alt="Avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            height="55px"
            width="55px"
            className="rounded-circle"
          />
        </div>
        <div className="d-flex flex-column">
          <span className="text-light fw-bold">Product Hunt</span>
          <span className="text-light text-opacity-50 small">
            @ProductHunt
          </span>
        </div>
        <div className="ms-auto">
          <Button
            type="button"
            className="btn-white rounded-pill px-3"
          >
            <span className="fw-bold fs-7 text-primary">Follow</span>
          </Button>
        </div>
      </Stack>
      <a href="#" className="fw-bold small link">
        Show More
      </a>
    </Container>
  );
}
