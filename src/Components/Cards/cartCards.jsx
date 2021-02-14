import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'

const cartCards = ({ product }) => {
    return (
        <div style={{
            border: '1px lightgrey solid',
            borderRadius: '15px',
            marginBottom: '15px',
            padding: '10px 10px 0px 10px'
        }}>
            <Row>
                <Col>
                    <h5>{product.name}</h5>
                    <img src={`imgs/${product.image}`} alt="cart product" style={{ width: '100px' }} /><br /><br />
                    <p style={{ width: '200px', height: '50px', overflowY: 'hidden' }}>{product.description}</p>

                </Col>

                <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ textAlign: 'center' }}>
                        <p><strong>Subtotal</strong></p>

                        <Button variant="secondary">
                            <strong>+</strong>
                        </Button>
                        <p style={{ margin: 0 }}>1</p>
                        <Button variant="secondary">
                            <strong>-</strong>
                        </Button >
                        <br /><br />
                        <p>Rp {product.price},-</p>
                    </div>

                </Col>
            </Row>

        </div>
    )
}
export default cartCards
