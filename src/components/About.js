import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Spinner from 'react-bootstrap/Spinner';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import useSWR from 'swr';
import WorkExperience from './WorkExperience';
import Education from './Education';
import KeySkills from './KeySkills';

export default function About() {
  const [isLoading, setLoading] = useState(true);
  const [workDescriptions, setWorkDescriptions] = useState({
    conversocial: null,
    verv: null,
    ibm: null,
    queensu: null,
  });

  const spinner = () => (
    <Spinner
      animation="border"
      className="spinner"
      role="status"
      variant="secondary"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );

  const fetcher = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((res) => res[0])
      .then((res) => {
        setLoading(false);
        setWorkDescriptions({
          conversocial: res.conversocial,
          verv: res.verv,
          ibm: res.ibm,
          queensu: res.queensu,
        });
      });

  const { error } = useSWR(
    'https://morning-garden-95959.herokuapp.com/about',
    fetcher
  );

  if (error) console.log(error);

  return (
    <section>
      <Tabs defaultActiveKey="work-experience" id="about_tabs">
        <Tab
          className={isLoading ? 'loading' : ''}
          eventKey="work-experience"
          title={
            <FormattedMessage
              id="about.work_experience"
              defaultMessage="📃 Work Experience"
            />
          }
        >
          {!workDescriptions.conversocial && spinner()}
          {workDescriptions.conversocial && (
            <WorkExperience workDescriptions={workDescriptions} />
          )}
        </Tab>
        <Tab
          eventKey="education"
          title={
            <FormattedMessage
              id="about.education"
              defaultMessage="🎓 Education"
            />
          }
        >
          <Education />
        </Tab>
        <Tab
          eventKey="key-skills"
          title={
            <FormattedMessage
              id="about.key_skills"
              defaultMessage="🧰 Key Skills"
            />
          }
        >
          <KeySkills />
        </Tab>
      </Tabs>
    </section>
  );
}
