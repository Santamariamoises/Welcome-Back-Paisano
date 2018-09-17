import React from "react";
import { Col } from "react-bootstrap";
import AboutItem from "./AboutItem.jsx";

const AboutList = props => (
	<Col>
		{props.teamMembers.map((teamMember, index) => (
			<AboutItem teamMember={teamMember} index={teamMember.id} />
		))}
	</Col>
);
export default AboutList;