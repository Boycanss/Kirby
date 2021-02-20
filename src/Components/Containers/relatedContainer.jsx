import React from 'react'
import Card from '../Cards/productCards';

const RelatedContainer = ({ product }) => {
    // console.log(product)
    return (
        <Card product={product} show={false} />
    )
}

export default RelatedContainer
