import React from 'react'
import { Button } from 'react-bootstrap';
import Commerce from '@chec/commerce.js';
const commerce = new Commerce('pk_test_228485810589e825901899773fc3fb3e4eb4ed6a60fcd');

const AddToCart = ({ big, productID }) => {

    const addToCart = (id) => {
        commerce.cart.add(id, 1)
            .then((res) => {
                console.log(res);
            })
    }
    return (
        <div>
            {big === true ?
                <Button onClick={() => addToCart(productID)} variant="light" style={{ border: '1px lightblue solid', width: '90%', height: '75px', display: 'block', margin: 'auto' }}>
                    <strong>Add to Cart</strong>
                </Button> :

                <Button variant="primary" onClick={() => addToCart(productID)}>Add to cart</Button>
            }
        </div >
    )
}

export default AddToCart
