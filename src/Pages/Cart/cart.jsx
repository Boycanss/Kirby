import React, { useState, useEffect } from 'react'
import CartCard from '../../Components/Cards/cartCards'
import BigSpin from '../../Components/Spinner';
import { Button } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'
import objectIsEmpty from '../../Components/objectIsEmpty';

import Commerce from '@chec/commerce.js';
const commerce = new Commerce('pk_test_228485810589e825901899773fc3fb3e4eb4ed6a60fcd');


const Cart = () => {

    const [cart, setCart] = useState({});
    const [productLine, setProductLine] = useState([]);

    useEffect(() => {
        setData();
    }, []);

    console.log(cart);
    
    const setData = () => {
        commerce.cart.retrieve()
            .then((cart) => {
                setCart(cart);
                setProductLine(cart.line_items);

                setCart((state) => {
                    return {
                        ...state,
                        harga: cart.subtotal.formatted_with_symbol
                    }
                });
            })
    }

    const increaseQty = (id, qty) => {
        commerce.cart.update(id, { quantity: qty + 1 })
            .then((res) => {
                setData()
            }
            );
    }

    const reduceQty = (id, qty) => {
        commerce.cart.update(id, { quantity: qty - 1 })
            .then((res) => {
                setData()
            }
            );
    }

    const removeItem = (id) => {
        commerce.cart.remove(id)
            .then((res) => {
                setData()
            })
    }

    return (
        <div className="page">
            <h2><strong>Cart</strong></h2>
            {
                objectIsEmpty(cart) ?
                    <BigSpin />
                    :
                    productLine.length > 0 ?
                        productLine.map((product) =>
                            <div key={product.id} style={{ display: 'flex', flexDirection: 'row' }}>
                                <CartCard product={product} increaseQty={() => increaseQty(product.id, product.quantity)} reduceQty={() => reduceQty(product.id, product.quantity)} />
                                <Button className="updateCart" onClick={() => removeItem(product.id)} variant="light" style={{ height: '45px', margin: 'auto', zIndex: 2 }}>
                                    <Trash style={{ fontSize: '25px', zIndex: 1 }} />
                                </Button>
                            </div>
                        ) :
                        <h3>There is nothing in your cart</h3>
            }
            <div style={{ textAlign: 'right', width: '95%' }}>
                <p><strong style={{ marginRight: '20px' }}>Total: {cart.harga}</strong></p>
                <Button>
                    Checkout
                    </Button>
            </div>
        </div>
    )
}

export default Cart
