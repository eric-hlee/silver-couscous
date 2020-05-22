import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="icon-copyright">
        2020 Eric Lee. Designed and built with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>
        .
      </p>
      <Button
        className="contact-item icon-mail-alt"
        href="mailto:hsuan9528@gmail.com"
        variant="outline-dark"
      >
        Email
      </Button>
      <Button
        className="contact-item icon-linkedin"
        href="http://www.linkedin.com/in/erichsuanlee"
        variant="outline-dark"
      >
        LinkedIn
      </Button>
      <Button
        className="contact-item icon-github"
        href="http://github.com/ericlee1995"
        variant="outline-dark"
      >
        GitHub
      </Button>
    </footer>
  )
}
