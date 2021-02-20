import React from 'react'
import { Card, Col } from 'react-bootstrap';
import PriceButton from './priceButton';

const cards = ({ product, show }) => {

    let hg = show === true ? { col: 500, cardWidth: 18 } : { col: 390, cardWidth: 17 }

    const desc = product.description.replace(/<\/?[^>]+(>|$)/g, '\n');

    return (
        <Col xl={3} lg={4} md={6} sm={6} style={{ minWidth: '288px', height: `${hg.col}px`, marginBottom: '10px' }}>
            <a href={`/details/${product.id}`} className="detail-link">
                <Card style={{ width: `${hg.cardWidth}rem`, border: 'none' }}>
                    <div style={{ minHeight: '175px' }} >
                        <Card.Img className="productimg" style={{ transition: 'transform .2s' }} variant="top" src={product.media.source} />
                    </div>
                    <Card.Body>
                        <Card.Title >{product.name}</Card.Title>
                        <Card.Text>
                            {show && desc}
                        </Card.Text>
                    </Card.Body>

                </Card>
            </a>
            <PriceButton price={product.price.formatted_with_symbol} id={product.id} />
        </Col>
    )
}

export default cards
