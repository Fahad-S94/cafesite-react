import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-warning">
            <Container className="p-4">
                <Row className="my-4">
                    <Col lg='3' md='6' className="mb-4 mb-md-0">
                        <div className="shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '150px', height: '150px' }}>
                            <img src="./img/logo.png" height="200" alt="" loading="lazy" />
                        </div>
                        <p className="text-center">A perfect place to enjoy a cup of coffee.</p>    
                        <ul className="list-unstyled d-flex flex-row justify-content-center">
                            <li>
                                <a className="text-white px-2" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a className="text-white px-2" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a className="text-white px-2" href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg='3' md='6' className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Specialties</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fa fa-coffee" aria-hidden="true"></i> Americano</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white"><i className="fa fa-coffee" aria-hidden="true"></i> Mocha Frappucino</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white"><i className="fa fa-coffee" aria-hidden="true"></i> Hot Chocolate</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white"><i className="fa fa-coffee" aria-hidden="true"></i> Chocolate Slush</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white"><i className="fa fa-coffee" aria-hidden="true"></i> Strawberry Slush</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white"><i className="fa fa-coffee" aria-hidden="true"></i> Vanilla/Chocolate Melody</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white"><i className="fa fa-coffee" aria-hidden="true"></i> Cinnamon Buns</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg='3' md='6' className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Animals</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>General information</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>About the shelter</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Statistic data</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Job</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Tenders</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Contact</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg='3' md='6' className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Contact</h5>
                        <ul className="list-unstyled">
                            <li>
                            <p><i className="fa fa-location-arrow" aria-hidden="true"></i> Warsaw, 57 Street, Poland</p>
                            </li>
                            <li>
                            <p><i className="fa fa-phone" aria-hidden="true"></i> + 01 234 567 89</p>
                            </li>
                            <li>
                            <p><i className="fa fa-envelope-o" aria-hidden="true"></i> contact@example.com</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>            
    );
}

export default Footer;