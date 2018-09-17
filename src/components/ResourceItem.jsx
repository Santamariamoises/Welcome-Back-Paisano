import React from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./Resources.css";

const ResourceItem = props => (
  <Grid>
    <Row>
      <Col xs={12} sm={7} className="sidebar-section">
        <Image
          src={`https://i.imgur.com/${props.resource.logo}.jpg`}
          rounded="rounded"
        />
        <h3 className="resourcesDescription">
          {`${props.resource.name}
    ${props.resource.description}
    ${props.resource.url}`}{" "}
        </h3>
      </Col>
    </Row>
  </Grid>
);
export default ResourceItem;
