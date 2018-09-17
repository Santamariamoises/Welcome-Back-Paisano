import React from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./About.css";

const AboutItem = props => (
  <Grid>
    <Row>
      <Col sm={12} md={6} className="person-wrapper">
        <Image
          src={`https://i.imgur.com/${props.teamMember.photo}.jpg`}
          circle="circle"
          className="profile-pic"
        />
        <h3 className="teamDescription">
          {`${props.teamMember.name}`}
          <br />
          {`${props.teamMember.about}`}
        </h3>
      </Col>
    </Row>
  </Grid>
);
export default AboutItem;