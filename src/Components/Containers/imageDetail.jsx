import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap';

const ImageDetail = ({ images }) => {

    const [bigImage, setBigImage] = useState(0);

    const selectBigImage = (index) => {
        setBigImage(index);
    };

    return (
        <Col style={{ marginBottom: '50px' }}>
            <div style={{
                border: "1px solid lightblue",
                borderRadius: '36px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <img style={{ height: '420px' }} className="selectedBigImage" src={images[bigImage].url} alt={images.filename} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    {images.map((img, idx) => {
                        if (img.id !== images[bigImage].id) {
                            return <img key={idx} className="tinyImage" src={img.url} alt={img.filename} onClick={() => selectBigImage(idx)}
                                style={{ height: '165px', cursor: 'pointer', margin: '5px 7px' }}
                            />
                        }
                    })}
                </div>
            </div>
        </Col>
    )
}

export default ImageDetail
