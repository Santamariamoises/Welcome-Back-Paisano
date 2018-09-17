import React from "react";
import ResourceItem from "./ResourceItem.jsx";
import { Grid, Row, Col, Image } from "react-bootstrap";

const ResourcesList = props => (
	<Col>
		{props.resources.map((resource, index) => (
			<ResourceItem resource={resource} index={resource.id} />
		))}
	</Col>
);
export default ResourcesList;