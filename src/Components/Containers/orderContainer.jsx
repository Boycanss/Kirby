import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import AddCart from '../../Components/Buttons/addToCart';

const OrderContainer = ({ max, productID }) => {
    const [qty, setQty] = useState(0);
    const [size, setSize] = useState('');

    const pickSize = (id) => {
        setSize(id);
    }

    const pickQty = (e) => {
        setQty(e.target.value)
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
                            sizes.map((sz) => {
                                return <Button className={size === sz.name ? ' active' : ''} onClick={() => pickSize(sz.name)} key={sz.id} id={sz.name} variant="light" style={{ margin: '0 10px', borderRadius: '50%' }}>
                                    {sz.name}
                                </Button>
                            }
                            )
                        }
                    </div>
                </div>

                <div>
                    {
                        size !== '' &&
                        <>
                            <p>Qty:</p>
                            <input type="number" min="1" max={max} onChange={pickQty} value={qty} />
                        </>
                    }
                </div>
            </div>
            <div>
                {
                    qty > 0 &&
                    <AddCart productID={productID} size={size} qty={qty} />
                }
            </div>
        </div>
    )
}

export default OrderContainer
