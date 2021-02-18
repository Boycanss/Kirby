import Commerce from '@chec/commerce.js';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col, Spinner } from 'react-bootstrap';
import ImageDetail from '../../Components/Containers/imageDetail';
import Order from '../../Components/Containers/orderContainer';

const commerce = new Commerce('pk_test_228485810589e825901899773fc3fb3e4eb4ed6a60fcd');

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        commerce.products.retrieve(`${id}`)
            .then((prod) => {
                setProduct(prod);
                setProduct((prevState) => {
                    return {
                        ...prevState,
                        harga: prod.price.formatted_with_symbol
                    }
                });
                setIsLoading(false);
            })
    }, []);

    return (
        <div className="page">
            {isLoading === true ?
                <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 2, backgroundColor: 'white' }}>
                    <Spinner variant="primary" animation="border" style={{ position: 'relative', width: '115px', height: '115px', top: '30%', left: '45%', zIndex: 3 }} />
                </div> :
                <Row style={{ marginTop: '30px' }}>
                    {product.assets ? <ImageDetail images={product.assets} /> : null
                    }
                    <Col style={{ minWidth: '459px', minHeight:'525px' }}>
                        <h2 style={{ paddingBottom: '5px', borderBottom: '1px lightBlue solid' }}><strong>{product.name}</strong></h2>
                        <h4><strong>{product.harga}</strong></h4>
                        <br />

                        <span dangerouslySetInnerHTML={{ __html: product.description }} />
                        <br /><br />

                        <Order max={product.quantity} />
                    </Col>
                </Row>

            }

        </div>
    )
}

export default Details
