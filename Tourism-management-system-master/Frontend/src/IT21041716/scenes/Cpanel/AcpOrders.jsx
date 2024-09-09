import React, { useEffect, useState } from 'react'
import { Box, IconButton, Button } from "@mui/material";
import nature from '../../../assets/nature.jpg'
import DashHeader from '../../component/DashHeader';
import { Container, Table } from 'react-bootstrap'
import FileDownloadDoneRoundedIcon from '@mui/icons-material/FileDownloadDoneRounded';
import { getAcptOrders } from '../../actions/AcptOrdersAction';
import { CompleteOrder } from '../../actions/completeAction';
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import {deleteacptOrder} from '../../actions/AcptOrdersAction'

const AcpOrders = () => {

    const AcptOrders = useSelector(state => state.AcptOrders.Getacptorders);
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const Seller_ID = user.Seller_ID
    console.log(Seller_ID)

    useEffect(() => {
        dispatch(getAcptOrders(Seller_ID))
    }, [])

    console.log(AcptOrders)

	const completeOrder = (data) => {
		const form = {
            Order_ID:data.Order_ID,
            Seller_ID: data.Seller_ID,
            Customer_Name:data.Customer_Name,
            Country:data.Country,
            Phone_number:data.Phone_number,
            Email:data.Email,
            Total_Amount:data.Total_Amount,
            No_Of_Persons:data.No_Of_Persons,
            Trip_Name:data.Trip_Name,
            Resevation_Date:data.Resevation_Date,
		}

        const form2 ={
            Order_ID:data.Order_ID,
            Seller_ID: data.Seller_ID,
        }
		Swal.fire({
			title: 'Are you sure want to Complete this Order?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#008000',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes!',
			cancelButtonText: 'No!'

		}).then(async (result) => {
			if (result.isConfirmed) {
				dispatch(CompleteOrder(form))
				dispatch(deleteacptOrder(form2))

			}
		})


	}


    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${nature})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '400px',
                    backgroundPosition: 'center center',
                    filter: 'brightness(50%)',

                }}
            />

            <Box display='flex' justifyContent="space-between" alignItems="center" position="relative" zIndex='1' marginTop='-100px' paddingLeft='100px'>
                <DashHeader title='Accepted Orders' subtitle='Welcome to your Accepted Orders Dashboard' />
            </Box>

            <Container>

                <Table striped bordered hover style={{ fontSize: 14, marginTop: "40px" }} responsive="lg" >
                    <thead>
                        <tr style={{ backgroundColor: "gray" }}>
                            <th style={{ verticalAlign: 'middle ' }}>#</th>
                            <th style={{ verticalAlign: 'middle ' }}>Order ID</th>
                            <th style={{ verticalAlign: 'middle ' }}>Customer Name</th>
                            <th style={{ verticalAlign: 'middle ' }}>Phone Number</th>
                            <th style={{ verticalAlign: 'middle ' }}>Email</th>
                            <th style={{ verticalAlign: 'middle ' }}>Total Amount</th>
                            <th style={{ verticalAlign: 'middle ' }}>No of persons</th>
                            <th style={{ verticalAlign: 'middle ' }}>Reservation date</th>
                            <th style={{ verticalAlign: 'middle ' }}>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            AcptOrders.map((data, index) => (
                                <tr key ={index}>
                                    <td scope="row">{index+1}</td>
                                    <td scope="row">{data.Order_ID}</td>
                                    <td scope="row">{data.Customer_Name}</td>
                                    <td scope="row">{data.Phone_number}</td>
                                    <td scope="row">{data.Email}</td>
                                    <td scope="row">{data.Total_Amount}</td>
                                    <td scope="row">{data.No_Of_Persons}</td>
                                    <td scope="row">{data.Resevation_Date}</td>
                                    <td>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <Button style={{ backgroundColor: "green", color: "white", marginRight: "5px" }} onClick={(e) => {completeOrder(data)}}>
                                                <FileDownloadDoneRoundedIcon size={20} style={{ color: "White", height: "1.2rem" }} />
                                                Complete
                                            </Button>

                                        </div>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default AcpOrders