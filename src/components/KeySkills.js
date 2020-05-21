import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default function KeySkills () {
  return (
    <Card className="key-skills">
      <Card.Body>
        <Card.Text as="div">
          <Card.Title>Programming languages:</Card.Title>
          <ListGroup horizontal="sm">
            <ListGroup.Item>Python</ListGroup.Item>
            <ListGroup.Item>Java</ListGroup.Item>
            <ListGroup.Item>Bash</ListGroup.Item>
          </ListGroup>
          <br />
          <Card.Title>Web/scripting languages:</Card.Title>
          <ListGroup horizontal="sm">
            <ListGroup.Item>HTML</ListGroup.Item>
            <ListGroup.Item>CSS</ListGroup.Item>
            <ListGroup.Item>Sass</ListGroup.Item>
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>SQL</ListGroup.Item>
          </ListGroup>
          <br />
          <Card.Title>Library/Frameworks:</Card.Title>
          <ListGroup horizontal="sm">
            <ListGroup.Item>ReactJS</ListGroup.Item>
            <ListGroup.Item>Redux</ListGroup.Item>
            <ListGroup.Item>React-Router</ListGroup.Item>
            <ListGroup.Item>React Intl</ListGroup.Item>
            <ListGroup.Item>ExpressJS</ListGroup.Item>
            <ListGroup.Item>DraftJS</ListGroup.Item>
            <ListGroup.Item>Jest</ListGroup.Item>
            <ListGroup.Item>Enzyme</ListGroup.Item>
          </ListGroup>
          <br />
          <Card.Title>Other technologies:</Card.Title>
          <ListGroup horizontal="sm">
            <ListGroup.Item>Docker</ListGroup.Item>
            <ListGroup.Item>Git</ListGroup.Item>
            <ListGroup.Item>GitHub</ListGroup.Item>
            <ListGroup.Item>Webpack</ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
