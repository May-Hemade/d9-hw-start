import React from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"

function Favorites() {
  console.log("Favorites")
  const favorites = useSelector((state) => state.favorites.jobs)
  return (
    <div>
      <Row>
        {favorites.map((favorite) => (
          <Col key={favorite._id} lg={3}>
            <Card>
              <Card.Body>
                <Card.Title>{favorite.title}</Card.Title>
                <p>{favorite.company_name}</p>
                <Card.Text>{favorite.category}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Favorites
