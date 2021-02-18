import React, { useEffect, useState } from 'react'
import { Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Card from '../../Components/Cards/productCards'
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
            {/* <h2 ><strong>{!id || id === undefined ? "All items" : id}</strong></h2> */}
            {isLoading === true ?
                <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 2, backgroundColor: 'white' }}>
                    <Spinner variant="primary" animation="border" style={{ position: 'relative', width: '115px', height: '115px', top: '30%', left: '45%', zIndex: 3 }} />
                </div> :
                category.length > 0 ?
                    category.map((ctg) => {
                        return <div key={ctg.id}>
                            <h2 style={{ paddingBottom: '5px', borderBottom: '1px lightBlue solid' }}><strong>{ctg.name}</strong></h2><br />
                            <Row style={{ marginBottom: '35px' }}>
                                {product.map((prod) => {
                                    return prod.categories[0].name === ctg.name ?
                                        <Card key={prod.id} product={prod} />
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
                                return <Card product={prod} />
                            })}
                        </Row>
                    </div>

            }
        </div>
    )
}

export default Home
