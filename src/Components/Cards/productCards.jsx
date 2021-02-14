import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'

const cards = ({ product }) => {
    return (
        <Col xl={3} lg={4} md={6} sm={6} style={{ minHeight: '400px' }}>
            <Card style={{ width: '18rem', border: 'none' }}>
                <Card.Img variant="top" src={`imgs/${product.image}`} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>

            </Card>
            <div style={{ position: 'absolute', bottom: '40px' }}>
                <span style={{ margin: '0 20px 0 10px' }}>Rp {product.price},-</span><Button variant="primary">Add to cart</Button>
            </div>
        </Col>
    )
}

export default cards
