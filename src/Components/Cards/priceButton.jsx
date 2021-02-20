import React from 'react'
import AddCart from '../Buttons/addToCart';

const PriceButton = ({ price, id }) => {

    return (
        <div>
            <div style={{
                position: 'absolute', bottom: '15px', width: '80%',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <span style={{ margin: '5px 20px 0 10px' }}>{price}</span>
                <AddCart big={false} productID={id} />
            </div>
        </div>
    )
}

export default PriceButton
