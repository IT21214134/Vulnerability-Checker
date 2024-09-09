import React, { useEffect, useState } from 'react'
import { Box, IconButton, Button } from "@mui/material";
import beach from '../../../assets/beach.jpg'
import DashHeader from '../../component/DashHeader';
import { Container, Table, Nav, Col } from 'react-bootstrap'
import FileDownloadDoneRoundedIcon from '@mui/icons-material/FileDownloadDoneRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux'
import { getOrders,deleteOrder } from '../../actions/revOrderAction'
import { AcptOrder } from '../../actions/AcptOrdersAction';
import Swal from 'sweetalert2';

const ReceivedOrders = () => {


	const [shDataModel, setShDataModel] = useState(false);
	const [datas, setDatas] = useState('')


	const DataModelShow = (data) => {
		setShDataModel(true);
		setDatas(data)

	}

	const DataModelClose = (e) => {
		setShDataModel(false);

	}

	const DisplayModel = () => {
		return (
			<MDBModal show={shDataModel} setShow={setShDataModel} tabIndex='-1'>
				<MDBModalDialog centered className="modal-dialog modal-dialog-scrollable" style={{ maxWidth: '800px' }}>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>ORDER DETAILS</MDBModalTitle>
							<MDBBtn className='btn-close' color='none' onClick={DataModelClose}></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>

							<div style={{ display: "flex", direction: "row" }}>

								<Col md={6}>
									<label style={{ fontSize: "18px", fontWeight: "600" }}>ORDER ID</label>
									<p className='ptags'>{datas.Order_ID}  </p>
								</Col>
								<Col md={6}>
									<label style={{ fontSize: "18px", fontWeight: "600" }} >NAME OF TRIP</label>
									<p className='ptags'>{datas.Trip_Name}</p>
								</Col>
							</div>
							<div style={{ display: "flex", direction: "row" }}>
								<Col md={6}>
									<label style={{ fontSize: "18px", fontWeight: "600" }} >CUSTOMER NAME</label>
									<p className='ptags'> {datas.Customer_Name} </p>
								</Col>
								<Col md={6}>
									<label style={{ fontSize: "18px", fontWeight: "600" }} >COUNTRY</label>
									<p className='ptags'>{datas.Customer_Name}</p>
								</Col>
							</div>
							<div style={{ display: "flex", direction: "row" }}>
								<Col md={6}>
									<label style={{ fontSize: "18px", fontWeight: "600" }} >EMAIL</label>
									<p className='ptags'>{datas.Email}  </p>
								</Col>
								<Col md={6}>
									<label style={{ fontSize: "18px", fontWeight: "600" }} >CONTACT NUMBER</label>
									<p className='ptags'> {datas.Phone_number} </p>
								</Col>

							</div>
							<div style={{ display: "flex", direction: "row" }}>
								<Col md={6}>
									<label style={{ fontSize: "18px", fontWeight: "600" }} >NO OF PERSONS</label>
									<p className='ptags'>{datas.No_Of_Persons}  </p>
								</Col>
								<Col md={6}>
									<label style={{ fontSize: "18px", fontWeight: "600" }} >TOTAL AMOUNT</label>
									<p className='ptags'> {datas.Total_Amount} </p>
								</Col>

							</div>
							<div style={{ display: "flex", direction: "row" }}>
								<Col md={6}>
									<label style={{ fontSize: "18px", fontWeight: "600" }} >DATE OF RECEVATION</label>
									<p className='ptags'>{datas.Resevation_Date}  </p>
								</Col>
								<Col md={6}>
									<label style={{ fontSize: "18px", fontWeight: "600" }} >DATE</label>
									<p className='ptags'>{datas.createdAt}</p>
								</Col>

							</div>


						</MDBModalBody>

						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-mdb-dismiss="modal" onClick={DataModelClose}>Close</button>
						</div>

					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		)
	}

	const receivedOrders = useSelector(state => state.revOrders.getorders);
	const user = useSelector(state => state.auth.user)
	const dispatch = useDispatch()
	console.log(receivedOrders)
	const Seller_ID = user.Seller_ID

	useEffect(() => {
		dispatch(getOrders(Seller_ID))
	}, [])

	const AcceptOrder = (data) => {

		const form = {
			Order_ID: data.Order_ID,
			Seller_ID: data.Seller_ID,
			Customer_Name: data.Customer_Name,
			Country: data.Country,
			Phone_number: data.Phone_number,
			Email: data.Email,
			Total_Amount: data.Total_Amount,
			No_Of_Persons: data.No_Of_Persons,
			Trip_Name: data.Trip_Name,
			Resevation_Date: data.Resevation_Date,
		}
		Swal.fire({
			title: 'Are you sure want to Accept this Order?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#008000',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes!',
			cancelButtonText: 'No!'

		}).then(async (result) => {
			if (result.isConfirmed) {
				dispatch(AcptOrder(form))

			}
		})


	}

	const rejectOrder = (id) => {

		const form ={
			Seller_ID:user.Seller_ID,
			Order_ID:id.Order_ID,
		}
		Swal.fire({
			title: 'Are you sure want to Delete this Order?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#008000',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes!',
			cancelButtonText: 'No!'

		}).then(async (result) => {
			if (result.isConfirmed) {
				dispatch(deleteOrder(form))
			}
		})
	}


	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${beach})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					height: '400px',
					backgroundPosition: 'center center',
					filter: 'brightness(50%)',

				}}
			/>

			<Box display='flex' justifyContent="space-between" alignItems="center" position="relative" zIndex='1' marginTop='-100px' paddingLeft='100px'>
				<DashHeader title='Received Orders' subtitle='Welcome to your Received Orders Dashboard' />
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
							<th style={{ verticalAlign: 'middle ' }}>Actions</th>

						</tr>
					</thead>
					<tbody>
						{
							receivedOrders.map((data, index) => (


								<tr key={index}>
									<td scope="row">{index + 1}</td>
									<td scope="row">{data.Order_ID}</td>
									<td scope="row">{data.Customer_Name}</td>
									<td scope="row">{data.Phone_number}</td>
									<td scope="row">{data.Email}</td>
									<td scope="row">$ {data.Total_Amount}</td>
									<td>
										<div style={{ display: "flex", flexDirection: "row" }}>

											<IconButton onClick={(e) => { DataModelShow(data) }}>
												<RemoveRedEyeOutlinedIcon size={20} style={{ color: "#243556", height: "1.2rem" }} />
											</IconButton>

											<IconButton onClick={(e) => { AcceptOrder(data) }} >
												<FileDownloadDoneRoundedIcon size={20} style={{ color: "#243556", height: "1.2rem" }} />

											</IconButton>
											<IconButton onClick={(e) => { rejectOrder(data) }}>
												<CancelOutlinedIcon size={20} style={{ color: "#243556", height: "1.2rem" }} />
											</IconButton>

										</div>

									</td>
								</tr>
							))
						}
					</tbody>
				</Table>
			</Container>
			{DisplayModel()}
		</div>
	)
}

export default ReceivedOrders