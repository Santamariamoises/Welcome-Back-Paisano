import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import ChatBot from "react-simple-chatbot";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Jumbotron>
            <h2>Welcome Back Paisano</h2>
            <Image
              src="assets/welcomemex.jpg"
              className="about-profile-picmex"
              rounded="rounded"
            />
            <p>
              <b> Helping Returnees And Deportees Start Over</b>
            </p>
            <p>
              <b>Help us by answering some questions!</b>
            </p>
            <Link to="/learnMore">
              <Button bsStyle="primary">Questionary</Button>
            </Link>
          </Jumbotron>
          <Image
            src="assets/amdream.jpg"
            className="about-profile-pic"
            rounded="rounded"
          />
          <Image
            src="assets/ice.jpg"
            className="about-profile-pic"
            rounded="rounded"
          />
          <Image
            src="assets/iceplane.jpg"
            className="about-profile-pic1"
            rounded="rounded"
          />
        </Grid>
      </div>
    );
  }
}