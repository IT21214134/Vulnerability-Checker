import React, { useEffect, useState } from 'react'
import {  Box, IconButton, Button } from "@mui/material";
import couple from '../../../assets/couple.jpg'
import DashHeader from '../../component/DashHeader';
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getHistory } from '../../actions/completeAction';

const OrderHistory = () => {

    const History = useSelector(state => state.completes.Getcmorders);
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const Seller_ID = user.Seller_ID

    useEffect(() => {
        dispatch(getHistory(Seller_ID))
    }, [])
    console.log(History)
    
  return (
    <div>
    <div
        style={{
            backgroundImage: `url(${couple})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '400px',
            backgroundPosition: 'center center',
            filter: 'brightness(50%)',

        }}
    />

    <Box display='flex' justifyContent="space-between" alignItems="center" position="relative" zIndex='1' marginTop='-100px' paddingLeft='100px'>
        <DashHeader title='Trip History' subtitle='Welcome to your Trip History records' />
    </Box>

    <Container>

        <Table striped bordered hover style={{ fontSize: 14, marginTop: "40px" }} responsive="lg" >
            <thead>
                <tr style={{ backgroundColor: "gray" }}>
                    <th style={{ verticalAlign: 'middle ' }}>#</th>
                    <th style={{ verticalAlign: 'middle ' }}>Order ID</th>
                    <th style={{ verticalAlign: 'middle ' }}>Customer Name</th>
                    <th style={{ verticalAlign: 'middle ' }}>Country</th>
                    <th style={{ verticalAlign: 'middle ' }}>Phone Number</th>
                    <th style={{ verticalAlign: 'middle ' }}>Email</th>
                    <th style={{ verticalAlign: 'middle ' }}>Total Amount</th>

                </tr>
            </thead>
            <tbody>
                {
                    History.map((data,index)=> (
                        <tr key={index}>
                        <td scope="row">{index + 1}</td>
                        <td scope="row">{data.Order_ID}</td>
                        <td scope="row">{data.Customer_Name}</td>
                        <td scope="row">{data.Country}</td>
                        <td scope="row">{data.Phone_number}</td>
                        <td scope="row">{data.Email}</td>
                        <td scope="row">${data.Total_Amount}</td>
                    </tr>
                    ))
                }

            </tbody>
        </Table>
    </Container>
</div>
  )
}

export default OrderHistory