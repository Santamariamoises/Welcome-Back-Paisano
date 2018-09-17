import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "./Resources.css";
import axios from "axios";
import ResourcesList from "./ResourcesList.jsx";

export default class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    axios
      .get("/resources")
      .then(res => this.setState({ list: res.data }))
      .catch(function(err) {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <style>{"body { background-color: HoneyDew; }"}</style>
        <Grid>
          <Col xs={12} sm={4} smOffset={2}>
            <Image
              src="assets/resources.jpg"
              className="about-profile-pic7"
              rounded="rounded"
            />
            <Col xs={12} sm={7} className="sidebar-section">
              <ResourcesList resources={this.state.list} />
            </Col>
          </Col>
        </Grid>
      </div>
    );
  }
}
