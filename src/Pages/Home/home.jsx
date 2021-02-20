import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Card from '../../Components/Cards/productCards'
import Spin from '../../Components/Spinner';
import Commerce from '@chec/commerce.js';
const commerce = new Commerce('pk_test_228485810589e825901899773fc3fb3e4eb4ed6a60fcd');

const Home = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        if (!id || id === undefined) {
            commerce.products.list().then((prod) => {
                setProduct(prod.data);
                categorize();
            });
        }
        else {
            commerce.products.list().then((prod) => {
                const result = [];
                prod.data.forEach((pr) => {

                    if (pr.categories[0].name === id) {
                        result.push(pr);
                    }

                })
                setProduct(result)
                setIsLoading(false);
            });
        }
    }, []);

    const categorize = () => {
        commerce.categories.list()
            .then((ctg) => {
                setCategory(ctg.data);
                setIsLoading(false);
            })
    }

    return (
        <div className="page">
            {isLoading === true ?
                <Spin /> :
                category.length > 0 ?
                    category.map((ctg) => {
                        return <div key={ctg.id}>
                            <h2 style={{ paddingBottom: '5px', borderBottom: '1px lightBlue solid' }}><strong>{ctg.name}</strong></h2><br />
                            <Row style={{ marginBottom: '35px' }}>
                                {product.map((prod) => {
                                    return prod.categories[0].name === ctg.name ?
                                        <Card key={prod.id} product={prod} show={true} />
                                        : null
                                })}
                            </Row>
                        </div>
                    })
                    :
                    <div>
                        <h2 style={{ paddingBottom: '5px', borderBottom: '1px lightBlue solid' }}><strong>{id}</strong></h2><br />
                        <Row style={{ marginBottom: '35px' }}>
                            {product.map((prod) => {
                                return <Card key={prod.id} product={prod} show={true} />
                            })}
                        </Row>
                    </div>

            }
        </div>
    )
}

export default Home
