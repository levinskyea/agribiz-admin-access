import React from 'react';
import Card from 'react-bootstrap/Card';

export default function VegetablesCard() {

    const number_of_veggies = 0;

    return (
        <>
            <Card style={{ width: '250px', height: '60px', borderRadius: '20px', backgroundColor: '#FFC727'}}>
                <Card.Body>
                <b style={{ fontSize: '1.7rem',lineHeight: '30px'}}>
                        Vegetables &nbsp;
                        { number_of_veggies }
                    </b>
                </Card.Body>
            </Card>
        </>
    );
}
