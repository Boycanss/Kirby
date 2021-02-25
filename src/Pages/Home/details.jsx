import Commerce from '@chec/commerce.js';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import ImageDetail from '../../Components/Containers/imageDetail';
import Order from '../../Components/Containers/orderContainer';
import Spin from '../../Components/Spinner';
import Related from '../../Components/Containers/relatedContainer';

const commerce = new Commerce('pk_test_228485810589e825901899773fc3fb3e4eb4ed6a60fcd');

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
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
                setRelatedProducts(prod.related_products)
                setIsLoading(false);
            })
    }, [id]);

    return (
        <div className="page">
            {isLoading === true ?
                <Spin /> :
                <Row style={{ marginTop: '30px' }}>
                    {product.assets ? <ImageDetail images={product.assets} /> : null
                    }
                    <Col style={{ minWidth: '459px', minHeight: '525px' }}>
                        <h2 style={{ paddingBottom: '5px', borderBottom: '1px lightBlue solid' }}><strong>{product.name}</strong></h2>
                        <h4><strong>{product.harga}</strong></h4>
                        <br />

                        <span dangerouslySetInnerHTML={{ __html: product.description }} />
                        <br /><br />

                        <Order max={product.quantity} productID={product.id} />
                    </Col>
                </Row>

            }
            <h4 style={{ paddingBottom: '5px', borderBottom: '1px lightBlue solid' }}>Related Products</h4>
            <Row style={{ marginTop: '30px' }}>
                {
                    relatedProducts.length !== 0 &&
                    relatedProducts.map((prod) => {
                        return <Related key={prod.id} product={prod} />
                    })

                }
            </Row>
        </div>
    )
}

export default Details
