import React, { useEffect, useState } from 'react'
import temple from '../../../assets/temple.jpg'
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Box, Typography, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import DashHeader from '../../component/DashHeader'
import { Link, useParams } from "react-router-dom";
import { getOnePost } from '../../actions/sellerPostAction';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Masonry from "react-responsive-masonry"
import './new.css'
import { NewOrder } from '../../actions/revOrderAction'
import { toast } from 'react-hot-toast';
import Header from '../../../IT21042560/header';

const Plandetails = () => {


    const [isSubmitted, setIsSubmitted] = useState(false);
    const dispatch = useDispatch()
    const id = useParams()
    const form = {
        Trip_ID: id.id
    }


    useEffect(() => {
        dispatch(getOnePost(form))
    }, [])


    const data = useSelector(state => state.post.onePost)
    console.log(data)
    const img = data.Images
    console.log(img)

    const [date, setDate] = useState('')
    const [persons, setPersons] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [customerName, setCustomerName] = useState('')

    




    return (
        <div>
            <Header/>
            <div
                style={{
                    backgroundImage: `url(${temple})`,
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
                        <Box padding='10px' marginLeft='auto' marginRight='auto'>
                            {/* <Masonry columnsCount={2} gutter="2px">
                        {img.map((image, i) => (
                            <img
                                key={i}
                                src={`http://localhost:5000/${image}`}
                                style={{ width: "100%", display: "block", cursor: "pointer" }}
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry> */}
                        </Box>
                    </div>
                </div>

                <div className="card mb-4" style={{ width: "35%", marginLeft: "0.5rem" }}>

                    <div className="card-body">

                        <div id="booking" className="section" >
                            <div className="section-center" style={{ backgroundColor: "#f7f9fadf", paddingTop: "50px", paddingBottom: "50px" }}>
                                <div className="container">
                                    <div className="row">
                                        {/* <form onSubmit={sendData}> */}
                                            <div className="form-header">
                                                <h2>Make your reservation</h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <span className="form-label">Check In</span>
                                                        <input className="form-control" type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <span className="form-label">Persons</span>
                                                        <input className="form-control" type="text" required value={persons} onChange={(e) => setPersons(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <span className="form-label">Customer Name</span>
                                                <input className="form-control" type="text" placeholder="Enter your name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <span className="form-label">Email</span>
                                                <input className="form-control" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <span className="form-label">Phone</span>
                                                <input className="form-control" type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                            </div>
                                            <div className="form-btn">
                                                <div>
                                                  
                                                   
                                                        <Link to={`/checkout/${data.Trip_ID}/${email}/${date}/${persons}/${phone}/${customerName}`}>
                                                            <Button style={{ backgroundColor: 'green', color: 'white', marginTop: '20px' }}>
                                                                Go to Checkout
                                                            </Button>
                                                        </Link>
                                                   
                                                </div>
                                            </div>
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                <li style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}><EmojiTransportationOutlinedIcon />Transport : {data.Transport}</li>
                                <li style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}><HotelOutlinedIcon />Accomodation : {data.Accomodation}</li>
                                <li style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}><FastfoodOutlinedIcon />Foods : {data.Meals}</li>
                                <li style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}><CalendarMonthOutlinedIcon />Days : {data.No_Of_Days}</li>
                                <li style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}><DownhillSkiingOutlinedIcon />Activities : {data.Activities}</li>
                                <li style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}><PlaceOutlinedIcon />Destinations : {data.Destinations}</li>
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




        </div>
    )
}

export default Plandetails