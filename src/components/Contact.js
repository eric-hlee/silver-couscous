import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export default function Contact() {
	const [validated, setValidated] = useState(false)

	const handleSubmit = (event) => {
		const form = event.currentTarget
		if (form.checkValidity() === false) {
			event.preventDefault()
			event.stopPropagation()
		}

		setValidated(true)
	}

	return (
		<section className="contact-form">
			<h1 className="contact">Contact me</h1>
			<Form
				name="contact"
				method="post"
				className="contact"
				noValidate
				validated={validated}
				onSubmit={handleSubmit}
			>
				<Form.Group controlId="formName&Email">
					<Form.Row>
						<Col>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								name="name"
								placeholder="Name"
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please enter your name.
							</Form.Control.Feedback>
						</Col>
						<Col>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								placeholder="Enter email"
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid email.
							</Form.Control.Feedback>
						</Col>
					</Form.Row>
				</Form.Group>
				<Form.Group controlId="formMessage">
					<Form.Label>Message</Form.Label>
					<Form.Control as="textarea" name="message" rows="3" required />
					<Form.Control.Feedback type="invalid">
						Please enter a message.
					</Form.Control.Feedback>
				</Form.Group>
				<Button className="submit-button" variant="dark" type="submit">
					Submit
				</Button>
			</Form>
		</section>
	)
}
