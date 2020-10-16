import React from 'react';
import { FormattedMessage } from 'react-intl';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  const getLifeAsDevItem = (item, index) => {
    return (
      <li key={index}>
        <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
      </li>
    );
  };

  return (
    <React.Fragment>
      <main>
        <header>
          <Jumbotron>
            <h1>
              <FormattedMessage id="home.greeting" defaultMessage="Hello!" />
            </h1>
            <Image
              src={require('../assets/images/profile.jpg')}
              alt="Eric Lee"
              roundedCircle={true}
              height="144"
              width="144"
            />
            <h1 className="name">
              <FormattedMessage id="home.name" defaultMessage="Eric Lee" />
            </h1>
            <h2 className="about">
              <Badge variant="dark">
                <FormattedMessage
                  id="home.whoami"
                  defaultMessage="I'm a Vancouver based software engineer."
                />
              </Badge>
            </h2>
            <Button
              variant="dark"
              href="https://morning-garden-95959.herokuapp.com/resume"
              className="icon-download"
            >
              <FormattedMessage id="home.resume" defaultMessage="Resume" />
            </Button>
          </Jumbotron>
        </header>
        <section>
          <Card>
            <Card.Body>
              <Container fluid>
                <Row>
                  <Col className="img-col">
                    <Image
                      className="img-eric"
                      src={require('../assets/images/eric.jpg')}
                      alt="Eric"
                      height="180"
                      width="171"
                      fluid
                    />
                  </Col>
                  <Col sm={5} className="about-body">
                    <div className="speech-bubble">
                      <p>
                        <strong>
                          <FormattedMessage
                            id="home.life_as_dev"
                            defaultMessage="🧑🏻‍💻 My life as a developer:"
                          />
                        </strong>
                      </p>
                      <ul>
                        {[
                          {
                            id: 'home.life_as_dev_1',
                            defaultMessage: 'Started learning HTML at 10',
                          },
                          {
                            id: 'home.life_as_dev_2',
                            defaultMessage:
                              'Received an award for creating a website at 12',
                          },
                          {
                            id: 'home.life_as_dev_3',
                            defaultMessage:
                              'Studied computer science in university at 18',
                          },
                          {
                            id: 'home.life_as_dev_4',
                            defaultMessage: 'Completed an internship at 22',
                          },
                          {
                            id: 'home.life_as_dev_5',
                            defaultMessage:
                              'Kicked off career as a technical support engineer at 23',
                          },
                          {
                            id: 'home.life_as_dev_6',
                            defaultMessage:
                              'Joined a startup as a junior software engineer at 24',
                          },
                          {
                            id: 'home.life_as_dev_7',
                            defaultMessage: 'Looking for new opportunities!',
                          },
                        ].map(getLifeAsDevItem)}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}
