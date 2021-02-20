import React from 'react'
import { Spinner } from 'react-bootstrap';

const index = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 2, backgroundColor: 'white' }}>
            <Spinner variant="primary" animation="border" style={{ position: 'relative', width: '80px', height: '80px', top: '30%', left: '45%', zIndex: 3 }} />
        </div>
    )
}

export default index
