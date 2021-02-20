import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import AddCart from '../../Components/Buttons/addToCart';

const OrderContainer = ({ max, productID }) => {
    const [order, setOrder] = useState([]);
    const [size, setSize] = useState('');

    const pickSize = (id) => {
        setSize(id);
        setOrder(state => {
            let name;
            sizes.forEach((sz) => {
                if (sz.id === id) {
                    name = sz.name;
                }
            })
            return {
                size: name
            }
        })
    }

    const setQty = (e) => {
        setOrder(state => {
            return {
                ...state,
                qty: e.target.value
            }
        })
    }

    const sizes = [{ id: '1', name: "S" },
    { id: '2', name: "M" },
    { id: '3', name: "L" },
    { id: '4', name: "XL" }
    ];

    return (
        <div>
            <div style={{ marginBottom: '35px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <p>Size:</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {
                            sizes.map((sz) =>

                                <Button className={size === sz.id ? ' active' : ''} onClick={() => pickSize(sz.id)} key={sz.id} id={sz.name} variant="light" style={{ margin: '0 10px', borderRadius: '50%' }}>
                                    {sz.name}
                                </Button>
                            )
                        }
                    </div>
                </div>

                <div>
                    {
                        size !== '' &&
                        <>
                            <p>Qty:</p>
                            <input type="number" min="1" max={max} onChange={setQty} value={order.qty === undefined ? 0 : order.qty} />
                        </>
                    }
                </div>
            </div>
            <div>
                {
                    order.qty > 0 &&
                    <AddCart big={true} productID={productID} />
                }
            </div>
        </div>
    )
}

export default OrderContainer
