import Commerce from '@chec/commerce.js';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Row, Spinner } from 'react-bootstrap'
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
                setIsLoading(false);
            })
    }, []);

    console.log(product.assets);
    return (
        <div className="page">
            {isLoading === true ?
                <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 2, backgroundColor: 'white' }}>
                    <Spinner variant="primary" animation="border" style={{ position: 'relative', width: '115px', height: '115px', top: '30%', left: '45%', zIndex: 3 }} />
                </div> :
                <div>
                    <h2 style={{ paddingBottom: '5px', borderBottom: '1px lightBlue solid' }}><strong>{product.name}</strong></h2><br />
                    {product.assets ? product.assets.map((img) => {
                        console.log(img);
                        return <img key={img.id} src={img.url} alt={img.filename} />
                    }) : null
                    }
                </div>

            }

        </div>
    )
}

export default Details
