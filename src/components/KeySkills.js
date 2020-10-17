import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function KeySkills() {
  const getSkillItem = (skill, index) => {
    return <ListGroup.Item key={index}>{skill}</ListGroup.Item>;
  };

  return (
    <Card className="key-skills">
      <Card.Body>
        <Card.Text as="div">
          <Card.Title>Programming languages:</Card.Title>
          <ListGroup horizontal="sm">
            {['Python', 'Java', 'Bash'].map(getSkillItem)}
          </ListGroup>
          <br />
          <Card.Title>Web/scripting languages:</Card.Title>
          <ListGroup horizontal="sm">
            {['HTML', 'CSS', 'Sass', 'JavaScript', 'SQL'].map(getSkillItem)}
          </ListGroup>
          <br />
          <Card.Title>Library/Frameworks:</Card.Title>
          <ListGroup horizontal="sm">
            {[
              'React',
              'Redux',
              'React-Router',
              'React Intl',
              'Node.js',
              'Draft.js',
              'Jest',
              'Enzyme',
            ].map(getSkillItem)}
          </ListGroup>
          <br />
          <Card.Title>Other technologies:</Card.Title>
          <ListGroup horizontal="sm">
            {['Docker', 'Git', 'GitHub', 'Webpack'].map(getSkillItem)}
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
