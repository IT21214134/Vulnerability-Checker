import React, { useEffect, useState } from 'react'
import propic from '../../../assets/couple.jpg'
import { Box, Typography, Button, Grid } from "@mui/material";
import Masonry from "react-responsive-masonry"
import './dash.css'
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import './cssfiles/card.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost, updateImages } from '../../actions/sellerPostAction';
import { MDBBtn, MDBModal, MDBTextArea, MDBScrollspy, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBCardFooter } from 'mdb-react-ui-kit';
import { Col, Container, Row, Table, Nav, Form } from 'react-bootstrap'
import DashHeader from '../../component/DashHeader'

const test = () => {
    const dispatch = useDispatch()
    const id = useParams()
    const form = {
        Trip_ID: id.id
    }


    useEffect(() => {
        dispatch(getOnePost(form))
    }, [])


    const data = useSelector(state => state.post.onePost)


    const img = data.Images
    console.log(img)
    const user = useSelector(state => state.auth.user)
    console.log(user)




    //gellary upload
    const [shUpdateModel, setShUpdateModel] = useState(false);
    const [Images, setImages] = useState("")
    const showUpdateModel = () => {
        setShUpdateModel(true);

    }

    const closeUpdateModel = () => {
        setShUpdateModel(false);

    }


    const handleImages = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };

    const count = Images.length;
    const imgArray = [];

    for (let i = 0; i < count; i++) {
        imgArray.push({ name: Images[i]?.name });
    }

    const updateGellary = (e) => {
        e.preventDefault()

        const form = {
            Trip_ID: id.id,
            Images: imgArray
        }


        dispatch(updateImages(form))
    }

    const geleryModel = () => {
        return (
            <MDBModal show={shUpdateModel} setShow={setShUpdateModel} tabIndex='-1'>
                <MDBModalDialog centered className="modal-dialog modal-dialog-scrollable">
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>UPDATE GALLERY</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={closeUpdateModel}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>

                            <Form encType='multipart/form-data'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        type='file'
                                        multiple
                                        onChange={(e) => { handleImages(e) }}

                                    />

                                </Form.Group>
                            </Form>
                        </MDBModalBody>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal" onClick={closeUpdateModel}>Close</button>
                            <button type="button" class="btn btn-primary" onClick={updateGellary}>Update Inquiry</button>
                        </div>

                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        )
    }

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${propic})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '400px',
                    backgroundPosition: 'center center',
                    filter: 'brightness(50%)',

                }}
            />

            <Box display='flex' justifyContent="space-between" alignItems="center" position="relative" zIndex='1' marginTop='-100px' paddingLeft='100px'>
                <DashHeader title='Trip Details' subtitle='Welcome to your Trips Details Page' />
            </Box>
            {/* <div className="card mb-4" style={{ width: "1300px", marginLeft: "auto", marginRight: 'auto', padding: "10px 10px 10px 10px" }}>
                <div className="card-body"> */}

            <div>
                <h3 style={{ marginLeft: "20px", fontFamily: "Lato", marginTop: "50px" }}>{data.Trip_Name}</h3>
            </div>
            <div className="postcard__subtitle small" style={{ marginLeft: "25px" }}>
                <time dateTime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i> {new Date(data.createdAt).toLocaleDateString('en-GB')}
                    <i className="fas fa-calendar-alt mr-2" style={{ marginLeft: "20px" }}><LocationOnOutlinedIcon /></i>{data.Destinations}
                    <i className="fas fa-calendar-alt mr-2" style={{ marginLeft: "20px" }}><Person2OutlinedIcon /></i>Per person based
                </time>
            </div>
            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "row" }}>
                <div className="card mb-4" style={{ width: "65%", marginLeft: "0.7rem" }}>

                    <div className="card-body">
                        {/* <Box padding='10px' marginLeft='auto' marginRight='auto'>
                            <Masonry columnsCount={2} gutter="2px">
                                {img.map((image, i) => (
                                    <img
                                        key={i}
                                        src={`http://localhost:5000/${image}`}
                                        style={{ width: "100%", display: "block", cursor: "pointer" }}
                                        onClick={() => viewImage(image, i)}
                                    />
                                ))}
                            </Masonry>
                        </Box> */}
                    </div>
                </div>

                <div className="card mb-4" style={{ width: "35%", marginLeft: "0.5rem" }}>

                    <div className="card-body">

                        <div>
                            <Box display="flex" justifyContent="center" alignItems="center" marginTop="30px" >

                                <img
                                    alt="profile-user"
                                    width="120px"
                                    height="120px"
                                    src={`http://localhost:5000/${user.ProfilePicture}`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />


                            </Box>
                            <h4 style={{ textAlign: "center", fontFamily: "roboto" }}>
                                {user.Personal_name}
                            </h4>


                            <div style={{ borderStyle: "solid", borderWidth: "2px", padding: "10px,10px,10px,10px", marginTop: "30px" }}>
                                <Typography style={{ fontSize: '13px', color: '#black', fontWeight: "600" }}>Email : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>{user.Personal_email}</p> </Typography>
                                <Typography style={{ fontSize: '13px', color: '#black', fontWeight: "600" }}>Contact Number :<p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>{user.Company_contact_no}</p></Typography>
                                <Typography style={{ fontSize: '13px', color: '#black', fontWeight: "600" }}>Address : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>{user.Company_address}</p></Typography>
                                <Typography style={{ fontSize: '13px', color: '#black', fontWeight: "600" }}>Company : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>{user.Company_name}</p></Typography>
                                <Typography style={{ fontSize: '13px', color: '#black', fontWeight: "600" }}>Company Email : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>{user.Company_email}</p></Typography>
                            </div>
                        </div>

                        <p style={{ fontSize: "13px", marginTop: "20px", color: "gray" }}>If you want to make any changes in this post you can change clicking below button..!</p>

                        <Button style={{ backgroundColor: "green", color: "white", marginTop: "20px", marginLeft: "30px" }} onClick={showUpdateModel}><ManageHistoryOutlinedIcon /> Update Gellary</Button>
                    </div>
                </div>
            </div >

            <div className="card mb-4">
                <div className="card-body" style={{ marginBottom: "50px" }}>

                    <div>
                        <h5 style={{ marginLeft: "20px", fontFamily: "Lato" }}>{data.Trip_Name}</h5>
                        <div style={{ width: "800px", marginLeft: "25px", }}>
                            <p style={{ textAlign: "justify", fontSize: "12px" }}>
                                {data.About_Trip}
                            </p>
                        </div>

                        <div>
                            <ul>
                                <li style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}><EmojiTransportationOutlinedIcon /> {data.Transport}</li>
                                <li style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}><HotelOutlinedIcon /> {data.Accomodation}</li>
                                <li style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}><FastfoodOutlinedIcon /> {data.Meals}</li>
                                <li style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}><CalendarMonthOutlinedIcon /> {data.No_Of_Days}</li>
                                <li style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}><DownhillSkiingOutlinedIcon /> {data.Activities}</li>
                                <li style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}><PlaceOutlinedIcon /> {data.Destinations}</li>
                            </ul>

                        </div>

                        <h5 style={{ marginLeft: "20px", fontFamily: "Lato" }}>What you will do..!</h5>
                        <div style={{ width: "800px", marginLeft: "25px", }}>
                            <p style={{ textAlign: "justify", fontSize: "12px" }}>
                                {data.What_will_You_Do
                                }
                            </p>
                        </div>
                    </div>
                    <br /><br />
                    <center>
                        *************************************************************Thank You*************************************************************
                    </center>
                </div>
            </div>


            {/* </div>
            </div> */}
            {geleryModel()}

        </div>
    )
}

export default test