import React from 'react';
import Form from 'react-bootstrap/Form';

export default function CashSelection() {
  return (
    <>
        <Form>
            <Form.Group controlId="uploadOfficialReceipts" className="mb-3" >
                <Form.Control type="file" style={{ borderColor: '#365900', borderRadius: '8px', boxShadow: '0 0 0 0.1rem #365900' }}/>
            </Form.Group>
        </Form>
    </>
  );
}
