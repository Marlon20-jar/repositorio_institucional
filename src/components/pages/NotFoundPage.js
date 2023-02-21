import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NotFoundPage extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col md={{ span: 6, offset: 3 }} className= "text-center">
            <img
              style={{ width: '100%' }}
              src="./images/404-not-found.svg"
              alt="Error-404"
            />
            <h1>¿Te has perdido perdido?</h1>
            <p>Vuelve a la pagina de <Link to= "/">Inicio</Link></p>
          </Col>
        </Row>
      </Container>
    )
  }
}

