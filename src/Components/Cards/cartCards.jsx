import React, { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import Commerce from '@chec/commerce.js';
const commerce = new Commerce('pk_test_228485810589e825901899773fc3fb3e4eb4ed6a60fcd');

const CartCards = ({ product, increaseQty, reduceQty }) => {

    return (
        <div style={{
            border: '1px lightgrey solid',
            width: '95%',
            borderRadius: '15px',
            marginBottom: '15px',
            padding: '10px 10px 0px 10px'
        }}>
            <Row>
                <Col>
                    <h5>{product.name}</h5>
                    <img src={product.media.source} alt="cart product" style={{ width: '100px' }} /><br /><br />
                    <p style={{ width: '200px', height: '50px', overflowY: 'hidden' }}>{product.description}</p>

                </Col>

                <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ textAlign: 'center' }}>
                        <p><strong>Subtotal</strong></p>

                        <Button className="updateCart" variant="secondary" onClick={increaseQty}>
                            <strong>+</strong>
                        </Button>
                        <p style={{ margin: 0 }}>{product.quantity}</p>
                        <Button className="updateCart" variant="secondary" onClick={reduceQty}>
                            <strong>-</strong>
                        </Button >
                        <br /><br />
                        <p>{product.line_total.formatted_with_symbol}</p>
                    </div>

                </Col>
            </Row>

        </div>
    )
}
export default CartCards
