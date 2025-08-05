import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "./style.css";

const teamMembers = [
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team_square_1.jpeg",
    fullName: "Akshay Kumar",
    designation: "Founder / CEO",
    bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team_square_2.jpeg",
    fullName: "Raima Ray",
    designation: "Business Head",
    bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team_square_3.jpeg",
    fullName: "Arjun Kapur",
    designation: "UI Design",
    bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team_square_4.jpeg",
    fullName: "Alia Bhatt",
    designation: "Marketing Head",
    bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
  },
];

const TeamMemberItem = ({ member }) => (
  <Card className="ezy__team1-item mt-4 border-0">
    <Card.Img variant="top" src={member.picture} alt={member.fullName} className="img-fluid w-100" />
    <Card.Body className="ezy__team1-content px-3 py-4 px-xl-4">
      <Card.Title as="h4" className="mb-2">{member.fullName}</Card.Title>
      <Card.Subtitle as="h6">{member.designation}</Card.Subtitle>
      <Card.Text className="opacity-50 mb-0">{member.bio}</Card.Text>
      <Button variant="outline-warning" className="mt-4 ezy__team1-btn">
        View Details
      </Button>
    </Card.Body>
  </Card>
);

TeamMemberItem.propTypes = {
  member: PropTypes.object.isRequired,
};

const Teams = () => {
  return (
    <section className="ezy__team1 dark">
      <Container>
        <Row className="justify-content-center mb-4 mb-md-5">
          <Col lg={6} xl={5} className="text-center">
            <h2 className="ezy__team1-heading mb-3">Our Experts Team</h2>
            <p className="ezy__team1-sub-heading mb-0">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at qui.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          {teamMembers.map((member, index) => (
            <Col md={6} lg={3} key={index}>
              <TeamMemberItem member={member} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Teams;
