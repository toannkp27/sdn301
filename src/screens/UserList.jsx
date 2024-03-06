import React, { useState } from 'react'; // Import useState
import { Container, Form, Table, Button, Col, Row, Image } from 'react-bootstrap'; // Import required components
import { Link } from 'react-router-dom'; // Import Link

const UserList = () => {


    return (
        <Container>
            <h4 className='text-center mb-4'>User Management</h4>
                <Table className="text-center">
                    <tr>
                        <th>Id</th>
                        <th>Fullname</th>
                        <th>Account</th>
                        <th>Role</th>
                        <th>IsBan</th>
                        <th>Action</th>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Đức Đạt</td>
                        <td>datnvhe161412</td>
                        <td>1</td>
                        <td>
                            No
                        </td>
                        <td>
                            <Button className="btn btn-danger">
                                ban
                            </Button>

                            <Button>
                                unban
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Nguyễn Hữu Hòa</td>
                        <td>hoanhhe161412</td>
                        <td>2</td>
                        <td>
                            Yes
                        </td>
                        <td>
                            <Button className="btn btn-danger">
                                ban
                            </Button>

                            <Button>
                                unban
                            </Button>
                        </td>
                    </tr>

                </Table>
        </Container>
    );
};

export default UserList;
