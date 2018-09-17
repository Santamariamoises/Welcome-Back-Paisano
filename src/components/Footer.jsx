import React from "react";
import { Col, Container, Row, Footer, Button, Fa } from "mdbreact";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

class FooterPage extends React.Component {
    render() {
        return (
            <Footer
                color="unique-color-dark"
                className="page-footer font-small pt-0"
            >
                <div style={{ backgroundColor: "#2892D7" }}>
                    <Container>
                        <Row className="py-4 d-flex align-items-center">
                            <Col
                                md="6"
                                lg="5"
                                className="text-center text-md-left mb-4 mb-md-0"
                            >
                                <h4>
                                    Get connected with us on social networks!
                                </h4>
                            </Col>
                            <Col
                                md="6"
                                lg="7"
                                className="text-center text-md-right"
                            >
                                <SocialIcon
                                    network="twitter"
                                    color="#00aced"
                                    url="https://twitter.com/?lang=en"
                                />
                                <SocialIcon
                                    network="facebook"
                                    color="#3b5998"
                                    url="https://facebook.com"
                                />
                                <SocialIcon
                                    network="linkedin"
                                    color="#007bb6"
                                    url="https://www.linkedin.com/"
                                />
                                <SocialIcon
                                    network="instagram"
                                    color="#bc2a8d"
                                    url="https://www.instagram.com/"
                                />
                                <SocialIcon
                                    network="github"
                                    color="blue"
                                    url="https://github.com/CodersMostWanted/Welcome-Back-Paisano"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="mt-5 mb-4 text-center text-md-left footer-2">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>CODERS MOST WANTED</strong>
                            </h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px" }}
                            />
                            <p className="footerText">
                                Our mission is handing you the correct tools to
                                all recently returned and deported families. We
                                will provide the resouces to start a brand new
                                life in Mexico. We are a group of returnees and
                                deportees just like you. We are here to help and
                                support!
                            </p>
                        </Col>

                        <Col md="2" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Products We Used</strong>
                            </h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px" }}
                            />
                            <p>
                                <a href="https://reactjs.org/">REACT</a>
                            </p>
                            <p>
                                <a href="https://reacttraining.com/react-router/">
                                    React-Router-Dom
                                </a>
                            </p>
                            <p>
                                <a href="https://mdbootstrap.com/react/">
                                    MDBReact
                                </a>
                            </p>
                            <p>
                                <a href="https://react-bootstrap.github.io/">
                                    React-Bootstrap
                                </a>
                            </p>
                        </Col>

                        <Col md="3" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Useful links</strong>
                            </h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px" }}
                            />
                            <p>
                                <a
                                    href=" http://www.holacode.com"
                                    target="_blank"
                                >
                                    Hola Code
                                </a>
                            </p>
                            <p>
                                <a
                                    href=" http://www.odamexico.org"
                                    target="_blank"
                                >
                                    ODA (Otros Dreams en Accion)
                                </a>
                            </p>
                            <p>
                                <a
                                    href="http://www.newcomienzos.org"
                                    target="_blank"
                                >
                                    Pocho House Services
                                </a>
                            </p>
                            <p>
                                <a
                                    href="http://www.segurodedesempleo.cdmx.gob.mx/requisitios_migrantes.php"
                                    target="_blank"
                                >
                                    Seguro de Desempleo
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://www.sederec.cdmx.gob.mx/secretaria/tramita-tu-tarjeta-sederec"
                                    target="_blank"
                                >
                                    SEDEREC(Obtain your ID)
                                </a>
                            </p>
                        </Col>

                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Contact</strong>
                            </h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px" }}
                            />
                            <p className="footerText">Mexico City, Mexico</p>
                            <p className="footerText">
                                {" "}
                                CodersMostWanted@HC.com
                            </p>
                            <p className="footerText"> + 52 55 8686 3708</p>
                            <p className="footerText"> + 52 55 8675 7654</p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="https://github.com/CodersMostWanted/Welcome-Back-Paisano">
                            {" "}
                            Coders Most Wanted{" "}
                        </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
