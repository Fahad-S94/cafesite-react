// import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
import HomeCarousel from '../features/carousel/Carousel';
import { Container, Col, Row, Card } from 'reactstrap';
import desertImg from '../app/assets/img/Dreamin’ Man_Lindsey Tramuta.webp';
import latteImg from '../app/assets/img/60DC0720-AFC0-4F5B-83DD-B53568BAFB84_1656635138.webp';

const HomePage = () => {
  const styleImg = { height: '800px', width: '100%' };
  
  return (
    <Container fluid>
      <SubHeader current="Home" />
      <HomeCarousel />
      {/* <DisplayList /> */}
      <Row>
        <Col xs="12" sm="6" md="4" className="d-none d-sm-block my-5">
          <Card className="rounded">
            <img
              className="img-fluid"
              src={latteImg}
              alt="Picture of coffee with coffee beans"
              style={styleImg}
            />
          </Card>
        </Col>
        <Col xs="12" sm="6" md="8" className="align-self-center text-light">
          <h1>A Taste Out of this World</h1>
          <p>
            A delightful fusion of Brazilian and Parisian charm. Savor the
            perfect cup of coffee crafted by our passionate baristas, and
            indulge in a unique blend of Brazilian and French flavors. A
            charming coffee haven awaits you. Bienvenue!
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          xs="12"
          sm="6"
          md="8"
          className="align-self-center text-light my-5"
        >
          <h1>An Environment Built for Savoring Every Sip</h1>
          <p>
            Seek a tranquil spot to savor a cup of coffee and read your favorite
            book, or you crave a social space to meet friends and indulge in
            mouthwatering delights, Café Brésil welcomes you with open arms.
            Join us in this cultural fusion, where Brazilian passion meets
            Parisian elegance, and let us be the highlight of your day.
            Bienvenue à Café Brésil!
          </p>
        </Col>
        <Col
          xs="12"
          sm="6"
          md="4"
          className="align-content-center d-none d-sm-block"
        >
          <Card className="rounded">
            <img
              fluid
              className="align-self-end"
              src={desertImg}
              alt="Picture of coffee with coffee beans"
              style={styleImg}
            />
          </Card>
        </Col>
      </Row>
      <section className="text-light">
        <Container className="pt-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg="10" xl="8">
              <figure className="note note-primary p-4">
                <blockquote className="blockquote">
                  <p className="pb-2">
                    "Café Brésil is a hidden gem in the heart of the city! Their
                    exquisite blend of Brazilian coffee and French delicacies is
                    a match made in culinary heaven. Each visit is an enchanting
                    experience, leaving me craving more of their delightful
                    flavors. A must-visit for coffee enthusiasts and food lovers
                    alike!"
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer mb-0">
                  Avid Coffee Connoisseur
                </figcaption>
              </figure>
              <figure className="note note-secondary p-4">
                <blockquote className="blockquote">
                  <p className="pb-2">
                    "Stepping into Café Brésil is like taking a mini vacation to
                    Brazil! The ambiance, the aroma, and the friendly baristas
                    instantly transport you to a different world. The coffee is
                    exceptional, and their menu offers a delightful twist with
                    the fusion of Brazilian and French delights. Café Brésil is
                    my new favorite spot to unwind and indulge in a perfect cup
                    of bliss!" - Parisian Café Lover."
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer mb-0">
                  Parisian Café Lover.
                </figcaption>
              </figure>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default HomePage;
