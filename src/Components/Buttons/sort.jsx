import React from 'react'
import { Dropdown } from 'react-bootstrap';

const Sort = ({ sort, by }) => {

    return (
        <div>
            <Dropdown>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                        Sort by {by}
                    </Dropdown.Toggle>
                </div>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => sort(1)}>Newest</Dropdown.Item>
                    <Dropdown.Item onClick={() => sort(2)}>Oldest</Dropdown.Item>
                    <Dropdown.Item onClick={() => sort(3)}>Price (highest) </Dropdown.Item>
                    <Dropdown.Item onClick={() => sort(4)}>Price (lowest) </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Sort
