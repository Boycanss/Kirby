import React from 'react'
import Card from '../../Components/Cards/productCards'
import { Container, Row, Col } from 'react-bootstrap'
import Commerce from '@chec/commerce.js';
const commerce = new Commerce(`${process.env.REACT_APP_CHEC_PUBLIC_KEY}`);

const products = [
    { name: 'Character 1', price: '100000', image: 'char1.gif', description: 'Officia qui do amet magna dolor excepteur aliquip enim.' },
    { name: 'Character 2', price: '100000', image: 'char2.gif', description: 'Pariatur cillum culpa nisi enim ex.' },
    { name: 'Character 3', price: '100000', image: 'char3.gif', description: 'Commodo commodo aliquip nisi magna commodo exercitation do do in..' },
    { name: 'Character 4', price: '100000', image: 'char4.gif', description: 'Non incididunt ipsum do ullamco occaecat voluptate eiusmod occaecat ea sit consectetur.' },
    { name: 'Character 5', price: '100000', image: 'char5.gif', description: 'Consequat ipsum ad velit ullamco cupidatat qui duis cupidatat pariatur dolore occaecat elit sint duis.' },
    { name: 'Character 6', price: '100000', image: 'char6.gif', description: 'Officia qui do amet magna dolor excepteur aliquip enim.' },
    { name: 'Character 7', price: '100000', image: 'char7.gif', description: 'Eu pariatur tempor Lorem ipsum anim proident aliqua nisi consectetur..' },
    { name: 'Character 8', price: '100000', image: 'char8.gif', description: 'Officia commodo magna laboris officia sint aliqua elit commodo pariatur.' },
    { name: 'Character 9', price: '100000', image: 'char9.gif', description: 'Officia qui do amet magna dolor excepteur aliquip enim.' },
    { name: 'Character 10', price: '100000', image: 'char10.gif', description: 'Ullamco officia ex Lorem mollit magna mollit aliquip anim.' },
    { name: 'Character 11', price: '100000', image: 'char11.gif', description: 'Officia culpa consectetur occaecat quis irure ex laborum sit consequat aliquip veniam.' },
]

const home = () => {

    commerce.products.list().then((product) => console.log(product));

    return (
        <div className="page">
            <h2 style={{ position: 'absolute' }}><strong>Character</strong></h2>
            <Container fluid="lg">
                <Row>
                    {products.map((product, idx) =>
                        <Card product={product} key={idx} />
                    )}
                </Row>

            </Container>
        </div>
    )
}

export default home
