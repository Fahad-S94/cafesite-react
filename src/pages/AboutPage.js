import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';
// import PartnersList from "../features/partner/PartnersList.js"

const AboutCafeBresil = () => {
  return (
    <section className="container mt-5">
      <Row>
        <Col
          md="6"
          className="d-flex align-items-center justify-content-center"
        >
          <div>
            <h2>About Café Brésil</h2>
            <p>
              Welcome to Café Brésil, where the aroma of freshly brewed coffee
              meets the charm of a Parisian café. Nestled in the heart of the
              city, Café Brésil is more than just a coffeehouse; it's an
              enchanting oasis that whisks you away to the vibrant streets of
              Brazil.
            </p>
            <p>
              Step inside and be greeted by the warm smiles of our baristas,
              passionate about crafting the perfect cup of coffee for you.
              Whether you're a connoisseur of espressos or a lover of lattes,
              our carefully curated selection of beans from Brazil's finest
              coffee regions promises to awaken your senses and leave you
              craving for more.
            </p>
          </div>
        </Col>
        <Col md="6">
          <img
            src="./img/e74d315479b2654088904c789006ab12.jpg"
            alt="Café Brésil"
            className="img-fluid"
          />
        </Col>
      </Row>
    </section>
  );
};

const AboutTheFounder = () => {
  return (
    <section className="py-5 mt-5">
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <h2>About the Founder</h2>
            <img
              src="./img/JUo59diI.jpg"
              alt="Founder: Isabella 'Bella' Moreau"
              className="img-fluid rounded-circle mb-3"
              style={{ maxWidth: '200px' }}
            />
            <p>
              Meet Isabella "Bella" Moreau, the visionary founder and creative
              force behind Café Brésil. With a passion for exploring diverse
              cultures and their culinary delights, Bella embarked on a
              transformative journey to Brazil and fell in love with the vibrant
              coffee culture and the enchanting Parisian cafés. Inspired by this
              fusion of experiences, she envisioned a coffee haven that would
              capture the essence of both worlds, ultimately giving birth to
              Café Brésil—a place where coffee aficionados and food enthusiasts
              could indulge in a unique cultural blend of flavors, all under one
              roof. With her warm smile and unwavering dedication to quality,
              Bella continues to infuse her love for coffee and culinary arts
              into every aspect of the café, creating an unforgettable
              experience for each guest that walks through the doors.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current="About Us" />
      <AboutCafeBresil />
      <AboutTheFounder />
    </Container>
  );
};

export default AboutPage;
