import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Livestock() {

    const number_of_livestock = 0;

    return (
    <>
        <Card style={{ width: '250px', height: '60px', borderRadius: '20px', backgroundColor: '#FFC727'}}>
            <Card.Body>
               <b style={{ fontSize: '1.7rem', lineHeight: '30px'}}>
                    Livestock &nbsp;
                    { number_of_livestock }
                </b>
            </Card.Body>
        </Card>
    </>
    );
}
