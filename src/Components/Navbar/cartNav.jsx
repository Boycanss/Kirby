import React from 'react'
import { Cart4 } from 'react-bootstrap-icons';
import { Badge } from 'react-bootstrap';

const cart = () => {
    return (
        <div style={{ marginRight: '15px' }}>
            <Badge style={{
                left: '33px',
                position: 'relative',
                bottom: '12px',
            }} variant="primary"> 2 </Badge>
            <Cart4 />
        </div>
    )
}

export default cart
