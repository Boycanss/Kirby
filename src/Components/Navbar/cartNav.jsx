import React, { useEffect, useState } from 'react'
import { Cart4 } from 'react-bootstrap-icons';
import { Badge } from 'react-bootstrap';

const Cart = ({ cartTotal }) => {
    return (
        <div style={{ marginRight: '15px' }}>
            <Badge style={{
                left: '33px',
                position: 'relative',
                bottom: '12px',
            }} variant="primary"> {cartTotal} </Badge>
            <Cart4 />
        </div>
    )
}

export default Cart
