import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Card from '../../Components/Cards/productCards'
import Spin from '../../Components/Spinner';
import Dropsort from '../../Components/Buttons/sort';
import Commerce from '@chec/commerce.js';
const commerce = new Commerce('pk_test_228485810589e825901899773fc3fb3e4eb4ed6a60fcd');

const Home = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState(1);

    useEffect(() => {
        setIsLoading(true)
        getData();
    }, [id, sortBy]);

    // console.log(product[3])

    const getData = () => {
        if (!id || id === undefined) {
            commerce.products.list().then((prod) => {
                setProduct(prod.data);
                sortItem(sortBy, prod.data);
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
                setProduct(result);
                sortItem(sortBy, prod.data);
                setIsLoading(false);
            });

        }
    }

    const categorize = () => {
        commerce.categories.list()
            .then((ctg) => {
                setCategory(ctg.data);
                setIsLoading(false);
            })
    }

    const sortItem = (id, prod) => {
        switch (id) {
            case 2:
                prod.sort((a, b) => {
                    return a.created - b.created
                })
                setProduct(prod)
                break;
            case 3:
                prod.sort((a, b) => {
                    return b.price.raw - a.price.raw
                })
                setProduct(prod)
                break;
            case 4:
                prod.sort((a, b) => {
                    return a.price.raw - b.price.raw
                })
                setProduct(prod)
                break;
            case 1:
                prod.sort((a, b) => {
                    return b.created - a.created
                })
                setProduct(prod)
                break;
            default: return prod;
        }
    }

    const sortProduct = (id) => {
        setSortBy(id);
    }

    return (
        <div className="page">
            {isLoading === true ?
                <Spin /> :
                category.length > 0 ?
                    category.map((ctg) => {
                        return <div key={ctg.id}>
                            <div style={{
                                paddingBottom: '5px',
                                borderBottom: '1px lightBlue solid',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: '25px'
                            }}>
                                <h2><strong>{ctg.name}</strong></h2><br />
                                <Dropsort sort={sortProduct} by={sortBy === 1 ? "newest" : sortBy === 2 ? "oldest" : sortBy === 3 ? "highest price" : "lowest price"} />
                            </div>
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
