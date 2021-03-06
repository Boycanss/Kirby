import React from 'react'

const PriceButton = ({ price, stock }) => {

    return (
        <div>
            <div style={{
                position: 'relative', bottom: '15px', width: '100%',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <span style={{ margin: '5px 20px 0 10px' }}>{price}</span>
                <span style={{ margin: '5px 20px 0 10px' }}>stock: {stock}</span>
            </div>
        </div>
    )
}

export default PriceButton
