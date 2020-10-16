import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  const getLifeAsDevItem = (item) => {
    return (
      <li>
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
            <p className="white">
              <FormattedMessage
                id="home.whoami"
                defaultMessage="My name is Eric."
              />
            </p>
            <p>
              <Button
                variant="dark"
                href="https://morning-garden-95959.herokuapp.com/resume"
                className="icon-download"
              >
                <FormattedMessage id="home.resume" defaultMessage="Resume" />
              </Button>
            </p>
          </Jumbotron>
        </header>
        <section>
          <Container fluid>
            <Row>
              <Col className="img-col">
                <Image
                  className="img-eric"
                  src={require('../assets/images/eric.jpg')}
                  alt="Picture of Eric"
                  height="180"
                  width="171"
                  fluid
                />
              </Col>
              <Col sm={8} className="about-body">
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
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}
