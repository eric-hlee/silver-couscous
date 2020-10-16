import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Media from 'react-bootstrap/Media';

export default function WorkExperience(props) {
  const [index, setIndex] = useState(2);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const { workDescriptions } = props;
  return (
    <Carousel activeIndex={index} controls={false} onSelect={handleSelect}>
      <Carousel.Item>
        <Card bsPrefix="card work">
          <Card.Body>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={require('../assets/images/conversocial.png')}
                alt="Conversocial logo"
              />
              <Media.Body>
                <Card.Title>
                  <Card.Link
                    href="http://www.conversocial.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    <FormattedMessage
                      id="work.conv"
                      defaultMessage="Conversocial"
                    />
                  </Card.Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <FormattedMessage
                    id="work.conv_jse"
                    defaultMessage="Junior Software Engineer"
                  />
                  <span className="info-item">&#183;</span>
                  <FormattedMessage
                    id="work.conv_work_period"
                    defaultMessage="May 2019 – Apr 2020"
                  />
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  <FormattedMessage
                    id="work.london_uk"
                    defaultMessage="London, United Kingdom"
                  />
                </Card.Subtitle>
                <ListGroup variant="flush" className="conversocial">
                  {workDescriptions.conversocial &&
                    workDescriptions.conversocial.map((desc, index) => (
                      <ListGroup.Item key={index}>{desc}</ListGroup.Item>
                    ))}
                </ListGroup>
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card bsPrefix="card work">
          <Card.Body>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={require('../assets/images/verv.jpeg')}
                alt="Verv logo"
              />
              <Media.Body>
                <Card.Title>
                  <Card.Link
                    href="http://verv.energy/"
                    target="_blank"
                    rel="noopener"
                  >
                    <FormattedMessage id="work.verv" defaultMessage="Verv" />
                  </Card.Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <FormattedMessage
                    id="work.verv_tse"
                    defaultMessage="Technical Support Engineer"
                  />
                  <span className="info-item">&#183;</span>
                  <FormattedMessage
                    id="work.verv_work_period"
                    defaultMessage="Oct 2018 – Apr 2019"
                  />
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  <FormattedMessage
                    id="work.london_uk"
                    defaultMessage="London, United Kingdom"
                  />
                </Card.Subtitle>
                <ListGroup variant="flush" className="verv">
                  {workDescriptions.verv &&
                    workDescriptions.verv.map((desc, index) => (
                      <ListGroup.Item key={index}>{desc}</ListGroup.Item>
                    ))}
                </ListGroup>
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card bsPrefix="card work">
          <Card.Body>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={require('../assets/images/ibm.png')}
                alt="IBM logo"
              />
              <Media.Body>
                <Card.Title>
                  <Card.Link
                    href="http://www.ibm.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    <FormattedMessage id="work.ibm" defaultMessage="IBM" />
                  </Card.Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <FormattedMessage
                    id="work.ibm_intern"
                    defaultMessage="e-Commerce Java Development Support Intern"
                  />
                  <span className="info-item">&#183;</span>
                  <FormattedMessage
                    id="work.ibm_work_period"
                    defaultMessage="May 2016 – Apr 2018"
                  />
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  <FormattedMessage
                    id="work.toronto_ca"
                    defaultMessage="Toronto, Canada"
                  />
                </Card.Subtitle>
                <ListGroup variant="flush" className="ibm">
                  {workDescriptions.ibm &&
                    workDescriptions.ibm.map((desc, index) => (
                      <ListGroup.Item key={index}>{desc}</ListGroup.Item>
                    ))}
                </ListGroup>
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card bsPrefix="card work">
          <Card.Body>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={require('../assets/images/queensu.png')}
                alt="Queen's University logo"
              />
              <Media.Body>
                <Card.Title>
                  <Card.Link
                    href="http://www.queensu.ca/"
                    target="_blank"
                    rel="noopener"
                  >
                    <FormattedMessage
                      id="work.queensu"
                      defaultMessage="Queen's University"
                    />
                  </Card.Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <FormattedMessage
                    id="work.queensu_ta"
                    defaultMessage="Teaching Assistant"
                  />
                  <span className="info-item">&#183;</span>
                  <FormattedMessage
                    id="work.queensu_work_period"
                    defaultMessage="Sep 2017 – Apr 2018"
                  />
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  <FormattedMessage
                    id="work.kingston_on"
                    defaultMessage="Kingston, Ontario"
                  />
                </Card.Subtitle>
                <ListGroup variant="flush" className="queensu">
                  {workDescriptions.queensu &&
                    workDescriptions.queensu.map((desc, index) => (
                      <ListGroup.Item key={index}>{desc}</ListGroup.Item>
                    ))}
                </ListGroup>
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}

WorkExperience.propTypes = {
  workDescriptions: PropTypes.object.isRequired,
};
