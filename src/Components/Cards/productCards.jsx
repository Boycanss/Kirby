import React from 'react'
import { NavLink } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import PriceButton from './priceButton';

const cards = ({ product, show }) => {

    // let hg = show === true ? { col: 500, cardWidth: 18 } : { col: 390, cardWidth: 17 }

    const desc = product.description.replace(/<\/?[^>]+(>|$)/g, '\n');

    return (
        <Col xl={3} lg={4} md={6} sm={6} style={{ minWidth: '288px', maxWidth:'362px', height: `500px`, marginBottom: '10px' }}>
            <NavLink to={`/details/${product.id}`} className="detail-link">
                <Card style={{ width: `100%`, border: 'none' }}>
                    <div style={{ minHeight: '175px' }} >
                        <Card.Img className="productimg" style={{ transition: 'transform .2s' }} variant="top" src={product.media.source} />
                    </div>
                    <Card.Body>
                        <Card.Title >{product.name}</Card.Title>
                        <Card.Text>
                            {show && desc}
                        </Card.Text>
                    </Card.Body>
                    <PriceButton price={product.price.formatted_with_symbol} stock={product.quantity} />
                </Card>
            </NavLink>
        </Col>
    )
}

export default cards
