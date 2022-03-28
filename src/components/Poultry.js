import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Poultry() {

    const number_of_poultry = 0;

    return (
        <>
            <Card style={{ width: '250px', height: '60px', borderRadius: '20px', backgroundColor: '#FFC727'}}>
                <Card.Body>
                <b style={{ fontSize: '1.7rem', lineHeight: '30px'}}>
                        Poultry &nbsp;
                        { number_of_poultry }
                    </b>
                </Card.Body>
            </Card>
        </>
    );
}
