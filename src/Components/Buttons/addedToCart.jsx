import React from 'react'
import { Button } from 'react-bootstrap';

const AddedToCart = ({ exit }) => {
    return (
        <div>
            <div>
                <strong>Added to cart</strong>
                <Button onClick={exit}>OK</Button>
            </div>
        </div>
    )
}

export default AddedToCart
