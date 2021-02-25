import React, { useEffect, useState } from 'react'
import { Cart4 } from 'react-bootstrap-icons';
import { Badge } from 'react-bootstrap';
import Commerce from '@chec/commerce.js';
const commerce = new Commerce('pk_test_228485810589e825901899773fc3fb3e4eb4ed6a60fcd');

const Cart = () => {

    const [cartTotal, setCartTotal] = useState();

    useEffect(() => {
        getCart();
        document.addEventListener('click', updateCart);
    }, [cartTotal]);

    const getCart = () => {
        commerce.cart.retrieve()
            .then((res) =>
                setCartTotal(res.total_items)
            )
    }

    const updateCart = (e) => {
        if (e.target.tagName === 'BUTTON') {
            if (e.target.className === "updateCart btn btn-primary" || e.target.className === "updateCart btn btn-secondary" || e.target.className === "updateCart btn btn-light") {
                getCart();
            } else { return null }
        }
        else if (e.target.parentElement) {
            if (e.target.parentElement.className === "updateCart btn btn-light" || e.target.parentElement.className === "updateCart btn btn-secondary") {
                getCart();
            } else { return null }
        } else { return null }
    }

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
