import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/first 1.jpg";
import img2 from "./images/second2.jpg";
import img3 from "./images/third2.png (1).jpg";
import img4 from "./images/card1.jpg";
import img5 from "./images/card2.jpg";
import img6 from "./images/card3.jpg";
import img7 from "./images/card4.jpg";
import img8 from "./images/card5.jpg";
import img9 from "./images/card6.jpg";
import img0 from "./images/logo.png";
import img11 from "./images/bg.jpg";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";


function NavBar() {
  return (
    <Container fluid className="outer_div">
      <Row>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="bar" fluid>
            <Navbar.Brand>
              <img className="w-25 ms-3" src={img0}></img>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Form className="d-flex gap-md-2 ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

              <Nav className="me-md-1 gap-md-3 ">
                <Nav.Link href="#home" className="fw-bold">
                  Home
                </Nav.Link>
                <Nav.Link href="#popular-destination" className="fw-bold">
                  Popular Destination
                </Nav.Link>
                <Nav.Link href="#link" className="fw-bold">
                  Rental
                </Nav.Link>
                <Nav.Link href="#About" className="fw-bold">
                  About
                </Nav.Link>
                <Nav.Link href="#link" className="fw-bold">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Col >
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row id="popular-destination">
        <Col md={12}>
        <h1 className="ms-2" style={{fontFamily:"cursive"}}>Popular Destination</h1></Col>
      </Row>
      <Row className="bg">
        <Col md={12}>
            <Row>
        <Col
          md={4}
          className="d-flex align-items-center justify-content-center mt-4"
        >
          <Card style={{ width: "18rem", height: "30rem" }}>
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title>Coimbatore</Card.Title>
              <Card.Text>
                The city is enveloped by the Western Ghats which is a blessing!
                Coimbatore's picturesque landscapes and abundant greenery along
                with the Nilgiri Biosphere Reserve and the Anamalai Tiger
                Reserve, make it an ideal destination for nature lovers and
                wildlife enthusiasts.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col
          md={4}
          className="d-flex align-items-center justify-content-center mt-4"
        >
          <Card style={{ width: "18rem", height:"30rem" }}>
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title>Chennai</Card.Title>
              <Card.Text>
                Chennai, the capital of Tamil Nadu, one of the most popular
                tourist destinations in the southern fringes of the country.
                Located on the Coromandel Coast, this busy metropolis was
                formerly called Madras.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col
          md={4}
          className="d-flex align-items-center justify-content-center mt-4 "
        >
          <Card style={{ width: "18rem",height:"30rem" }}>
            <Card.Img variant="top" src={img6} />
            <Card.Body>
              <Card.Title>Madurai</Card.Title>
              <Card.Text>
                The city has a number of historical monuments, with the Koodal
                Azhagar temple, Meenakshi Temple and the Thirumalai Nayakkar
                Mahal being the most prominent. Madurai is an important
                industrial and educational hub in South Tamil Nadu.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
            </Row>

           <Row >
        <Col
          md={4}
          className="d-flex align-items-center justify-content-center mt-4 mb-4"
        >
          <Card style={{ width: "18rem", height:"32rem" }}>
            <Card.Img variant="top" src={img7} />
            <Card.Body>
              <Card.Title>Kanyakumari</Card.Title>
              <Card.Text>
                Kanyakumari, formerly known as Cape Comorin, is a coastal town
                in the Indian state of Tamil Nadu. It is the southernmost tip of
                mainland India. Kanyakumari is popular for its beautiful
                beaches, unique Vivekananda Rock Memorial, and stunning sunrise
                and sunset views
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col
          md={4}
          className="d-flex align-items-center justify-content-center mt-4 mb-4"
        >
          <Card style={{ width: "18rem", height:"32rem" }}>
            <Card.Img variant="top" src={img8} />
            <Card.Body>
              <Card.Title>Nilgiris</Card.Title>
              <Card.Text>
                It is nature at its unsullied best, a trekker's paradise, an
                experience for nature lovers and a horticulturist's delight. The
                Nilgiris have a flavour of their own, dominated by a verdant and
                lush green. A trip to the Nilgiris, particularly off the beaten
                path, is a memorable experience.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col
          md={4}
          className="d-flex align-items-center justify-content-center mt-4 mb-4"
        >
          <Card style={{ width: "18rem", height:"32rem" }}>
            <Card.Img variant="top" src={img9} />
            <Card.Body>
              <Card.Title>Rameswaram</Card.Title>
              <Card.Text>
                Rameswaram is heavily associated with the stories of Lord Rama,
                who left the Indian mainland to rescue his wife, Goddess Sita,
                from the clutches of Ravana, who had taken her to Sri Lanka.
              </Card.Text>
              <Button className="d-flex align-items-center" variant="primary">
                Explore
              </Button>
            </Card.Body>
          </Card>
        </Col>
          </Row>
          </Col>
      </Row>

      <Row id="About">
        <Col md={12} xs={12} className="text-center mt-5">
          ABOUT
        </Col>
      </Row>

      <Row className="box mt-4 ">
        <Col md={3}>
          <img className="mx-auto ms-4" src={img0} />
        </Col>

        <Col md={6} className="mt-4">
          <h3 className="text-center">Why Venture Vibes ?</h3>
          <p>
            With our intuitive search feature, travelers can easily find the
            perfect flight, hotel, and rental car options tailored to their
            preferences and budget. Our advanced filtering options allow users
            to refine their search results by factors such as price range,
            location, amenities, and customer ratings, ensuring that they find
            exactly what they're looking for.
          </p>
        </Col>

        <Col md={3}>
          <h4 className="text-center mt-4 ">Follow us</h4>
          <div className="d-flex align-items-center justify-content-center gap-3 fs-3">
            <a href="https://www.whatsapp.com/join" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NavBar;
