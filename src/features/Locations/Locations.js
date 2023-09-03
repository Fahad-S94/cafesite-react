import { Container, Row, Col } from 'reactstrap';
import { LOCATIONS } from '../../app/shared/LOCATIONS';

const Locations = () => {
  const locationsData = LOCATIONS

  return (
    <section className="py-5">
      <Container fluid>
        <Row>
          <Col md="12" className="text-center">
            <h1>Our Locations</h1>
            <p>We have several Café Brésil locations to serve you. Find the nearest one below:</p>
            <Row>
              {locationsData.map((location, index) => (
                <Col key={index}>
                  <h3>{location.name}</h3>
                  <p>Address: {location.address}</p>
                  <p>Phone: {location.phone}</p>
                  <iframe
                    src={location.mapSrc}
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Locations;
