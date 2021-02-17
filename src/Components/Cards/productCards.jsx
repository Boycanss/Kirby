import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'

const cards = ({ product }) => {

    let hg = product.categories[0].name === 'Clothing' ?
        500 : 380;

    const desc = product.description.replace(/<\/?[^>]+(>|$)/g, '\n');
    return (

        <Col xl={3} lg={4} md={6} sm={6} style={{ minWidth: '288px', height: `${hg}px`, marginBottom: '10px' }}>
            <a href={`/details/${product.id}`} className="detail-link">
                <Card style={{ width: '18rem', border: 'none' }}>
                    <div style={{ minHeight: '175px' }} >
                        <Card.Img className="productimg" style={{ transition: 'transform .2s' }} variant="top" src={product.media.source} />
                    </div>
                    <Card.Body>
                        <Card.Title >{product.name}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                    </Card.Body>

                </Card>
            </a>
            <div style={{
                position: 'absolute', bottom: '15px', width: '80%',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <span style={{ margin: '5px 20px 0 10px' }}>{product.price.formatted_with_symbol}</span>
                <Button variant="primary">Add to cart</Button>
            </div>
        </Col>
    )
}

export default cards
