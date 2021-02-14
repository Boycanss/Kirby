import React from 'react'
import CartCard from '../../Components/Cards/cartCards'
import { Container, Button } from 'react-bootstrap'


const cartProducts = [
    { name: 'Character 5', price: '100000', image: 'char5.gif', description: 'Consequat ipsum ad velit ullamco cupidatat qui duis cupidatat pariatur dolore occaecat elit sint duis.' },
    { name: 'Character 6', price: '100000', image: 'char6.gif', description: 'Officia qui do amet magna dolor excepteur aliquip enim.' },
]

const cart = () => {
    return (
        <div className="page">
            <h2 style={{ position: 'absolute' }}><strong>Cart</strong></h2>
            <Container fluid="lg">
                {cartProducts.map((product) =>
                    <CartCard product={product} />
                )}
                <div style={{ textAlign: 'right' }}>
                    <p><strong style={{ marginRight: '20px' }}>Total: </strong>  Rp 200000,-</p>
                    <Button>
                        Checkout
                    </Button>
                </div>
            </Container>



        </div>
    )
}

export default cart
