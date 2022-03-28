import React from 'react';
import { Table } from 'react-bootstrap';

export default function UsersTable() {
  return (
    <>
        <Table responsive="lg" striped bordered hover>
            <thead style={{fontSize:'.5rem'}}>
                <tr>
                <th>ID</th>
                <th>User Type</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Password</th>
                <th>Shop Name</th>
                <th>Region</th>
                <th>Province</th>
                <th>Municipality</th>
                <th>Barangay</th>
                <th>ZIP Code</th>
                <th>Proof of Validity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                </tr>
                <tr>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                </tr>
            </tbody>
        </Table>
    </>
  );
}
