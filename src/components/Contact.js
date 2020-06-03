import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [validated, setValidated] = useState(false)
  const [show, setShow] = useState(false)

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    setValidated(true)

    const nameEmailInput = document.querySelector('#formNameEmail')
    const messageInput = document.querySelector('#formMessage')
    if (!nameEmailInput.checkValidity() || !messageInput.checkValidity()) {
      return
    }

    const data = { name, email, message }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data }),
    })
      .then(() => {
        handleShow()
        setName('')
        setEmail('')
        setMessage('')
        setValidated(false)
      })
      .catch((error) => alert(error))

    e.preventDefault()
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'message':
        setMessage(e.target.value)
        break
      default:
        console.error('An error occurred while processing form data.')
    }
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <section className="contact-form">
      <h1 className="contact">
        <FormattedMessage id="contact.contact_me" defaultMessage="Contact me" />
      </h1>
      <Form
        name="contact"
        method="post"
        className="contact"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formNameEmail">
          <Form.Row>
            <Col>
              <Form.Label>
                <FormattedMessage id="contact.name" defaultMessage="Name" />
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                <FormattedMessage
                  id="contact.invalid_name"
                  defaultMessage="Please enter your name."
                />
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label>
                <FormattedMessage
                  id="contact.email"
                  defaultMessage="Email address"
                />
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                <FormattedMessage
                  id="contact.invalid_email"
                  defaultMessage="Please provide a valid email."
                />
              </Form.Control.Feedback>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>
            <FormattedMessage id="contact.message" defaultMessage="Message" />
          </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={message}
            rows="3"
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            <FormattedMessage
              id="contact.invalid_message"
              defaultMessage="Please enter a message."
            />
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="submit-button" variant="dark" type="submit">
          <FormattedMessage id="contact.submit" defaultMessage="Submit" />
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FormattedMessage
              id="contact.success"
              defaultMessage="🎉 Success!"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <FormattedMessage
              id="contact.success_message"
              defaultMessage="If necessary, I will respond to you as soon as possible."
            />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <FormattedMessage id="contact.close" defaultMessage="Close" />
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  )
}
