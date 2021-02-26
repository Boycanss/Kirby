import React, { useState } from 'react'
import { Button, Spinner } from 'react-bootstrap';
import CartUpdated from '../PopsUp/cartUpdated';

import Commerce from '@chec/commerce.js';
const commerce = new Commerce('pk_test_228485810589e825901899773fc3fb3e4eb4ed6a60fcd');

const AddToCart = ({ productID, size, qty }) => {

    const [notif, setNotif] = useState(false);
    const [loadingNotif, setLoadingNotif] = useState(false);

    const addToCart = (id) => {
        setLoadingNotif(true);
        console.log({ id }, { size }, { qty });

        commerce.cart.add(szID, qty)
        .then((res) => {
            // console.log(res);
            setLoadingNotif(false);
            setNotif(true);
            document.addEventListener('click', () => {
                setNotif(false)
            });
        })
        // commerce.products.retrieve(id)
        //     .then((prod) => {
        //         console.log(prod)
        //         const { variants } = prod;
        //         const sz = variants[1].options;
        //         const szID = sz[size].id;
        //         commerce.cart.add(szID, qty)
        //             .then((res) => {
        //                 // console.log(res);
        //                 setLoadingNotif(false);
        //                 setNotif(true);
        //                 document.addEventListener('click', () => {
        //                     setNotif(false)
        //                 });
        //             })
        //     })
    }

    let notify = notif === true ? <CartUpdated /> : null;

    return (
        <div>
            {notify}
            <Button className="updateCart" onClick={() => addToCart(productID)} variant="light" style={{ border: '1px lightblue solid', width: '90%', height: '75px', display: 'block', margin: 'auto' }}>
                {loadingNotif === true ?
                    <Spinner animation="border" /> :
                    <strong>Add to Cart</strong>
                }
            </Button>
        </div >
    )
}

export default AddToCart
