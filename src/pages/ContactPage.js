import SubHeader from "../components/SubHeader";
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import ContactForm from "../components/ContactForm";
import Locations from "../features/Locations/Locations";

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current="Contact Us"/>
            <section className="container mt-5">
                <Row>
                    <Col md="8" className="offset-md-2">
                        <h1>Contact Us</h1>
                        <ContactForm />
                    </Col>
                </Row>
                <Locations />
            </section>
        </Container>
    )
}

export default ContactPage;