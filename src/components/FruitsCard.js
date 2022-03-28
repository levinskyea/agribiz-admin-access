import React from 'react';
import Card from 'react-bootstrap/Card';

export default function FruitsCard() {

    const number_of_fruits = 0;

    return (
    <>
        <Card style={{ width: '250px', height: '60px', borderRadius: '20px', backgroundColor: '#FFC727'}}>
            <Card.Body>
               <b style={{ fontSize: '1.7rem', lineHeight: '30px'}}>
                    Fruits &nbsp;
                    { number_of_fruits }
                </b>
            </Card.Body>
        </Card>
    </>
  );
}
