import React, { useEffect, useState } from 'react'
import DashHeader from '../../component/DashHeader'
import { Box, Typography, Button } from "@mui/material";
import srilanka from '../../../assets/srilanka.jpg'
import propic from '../../../assets/isuru.png'
import Masonry from "react-responsive-masonry"
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import './dash.css'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useDispatch, useSelector } from 'react-redux'
import { updateSeller, fetchSeller, updateDp, updateGallery } from '../../actions/authActions'
import { toast } from 'react-hot-toast'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { MDBBtn, MDBModal, MDBTextArea, MDBScrollspy, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBCardFooter } from 'mdb-react-ui-kit';
import { Col, Container, Row, Table, Nav, Form } from 'react-bootstrap'

const dashboard = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)



  const [companyName, setCompanyName] = useState(user.Company_Name);
  const [companyEmail, setCompanyEmail] = useState(user.Company_email);
  const [companyContactNo, setCompanyContactNo] = useState(user.Company_contact_no);
  const [companyAddress, setCompanyAddress] = useState(user.Company_address);
  const [personalName, setpersonalName] = useState(user.Personal_name);
  const [personalEmail, setPersonalEmail] = useState(user.Personal_email);
  const [personalContactNumber, setPersonalContactNumber] = useState(user.Personal_contact_no);
  const [personalAddress, setPersonalAddress] = useState(user.Personal_address);
  const [description, setDescription] = useState(user.Description);
  const [profilepic, setProfilePic] = useState(user.ProfilePicture);
  const [imagesCom, setImagesCom] = useState([user.imagesCom])
  const loading = useSelector(state => state.auth.loading)




  useEffect(() => {
    if (loading === true) {
      toast.loading('Processing...', {
        id: 'loading'
      })
    }
    else if (loading === false) {
      toast.dismiss('loading')
    }

  }, [loading]);

  const id = {
    Seller_ID: localStorage.Seller_ID
  }
  useEffect(() => {
    dispatch(fetchSeller(id))
  }, [])



  // const images = [


  //   'https://images.unsplash.com/photo-1569670380606-fd47201d42da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHNyaSUyMGxhbmthbiUyMHZpbGxhcyUyMHdpdGglMjBuYXRodXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   'https://images.unsplash.com/photo-1569670380685-169d7737183d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHNyaSUyMGxhbmthbiUyMHZpbGxhcyUyMHdpdGglMjBuYXRodXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

  // ];

  const [data, setData] = useState({ image: '', i: 0 })
  const viewImage = (image, i) => {
    setData({ image, i })
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0);
  }

  const closeImage = () => {
    setData({ image: '', i: 0 })
    document.body.style.overflow = '';
    window.scrollTo(0, 0);
  }


  const updateDetails = (e) => {
    e.preventDefault()
    const form = {
      Seller_ID: localStorage.Seller_ID,
      Company_name: companyName,
      Company_email: companyEmail,
      Company_contact_no: companyContactNo,
      Company_address: companyAddress,
      Personal_name: personalName,
      Personal_contact_no: personalContactNumber,
      Personal_address: personalAddress,
      Personal_email: personalEmail,
      Description: description
    }


    dispatch(updateSeller(form))
  }

  const handleCatImg = (e) => {
    setProfilePic(e.target.files[0]);
  }

  const updatePropic = (e) => {
    e.preventDefault()
    const form = new FormData();
    form.append('Seller_ID', localStorage.Seller_ID,)
    form.append('ProfilePicture', profilepic);

    dispatch(updateDp(form))
  }

  const handleGalImg = (e) => {
    const files = Array.from(e.target.files);
    setImagesCom(files);
  };

  const count = imagesCom.length;
  const imgArray = [];

  for (let i = 0; i < count; i++) {
    imgArray.push({ name: user.ImagesCom[i]?.name });
  }




  const updateGal = (e) => {
    e.preventDefault()

    const form = {
      Seller_ID: localStorage.Seller_ID,
      ImagesCom: imgArray
    }


    dispatch(updateGallery(form))
  }
 


  {user.ImagesCom.map((image, i) => (
    console.log(image.img)
  ))}

  return (

    <>
      {
        data.image &&
        <div style={{
          width: '80%',
          height: '80vh',
          backgroundColor: 'black',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: "10%",
          marginRight: "10%",
          zIndex: '2'

        }}>
          <button style={{ position: 'absolute', top: 0, right: 0 }} onClick={() => closeImage()}><CloseIcon /></button>
          <img src={data.image} style={{ width: 'auto', maxWidth: "90%", maxHeight: '90%', objectFit: 'cover' }} />
        </div>
      }
      <Box
        style={{
          backgroundImage: `url(${srilanka})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '400px',
          backgroundPosition: 'center center',
          filter: 'brightness(50%)',
        }}
      />

      <Box display='flex' justifyContent="space-between" alignItems="center" position="relative" zIndex='1' marginTop='-100px' paddingLeft='100px'>
        <DashHeader title='DASHBOARD' subtitle='Welcome to your dashboard' />
      </Box>
      <Box
        width="30rem"
        height="38rem"
        backgroundColor="#f5f5f5"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top="50%"
        left="35%"
        transform="translate(-50%, -50%)"


      >

        <Box display="flex" justifyContent="center" alignItems="center" marginTop='-580px' cursor='pointer'>

          <img
            alt="profile-user"
            width="200px"
            height="200px"
            src={`http://localhost:5000/${user.ProfilePicture}`}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />



        </Box>

        <Typography
          variant='h3'
          style={{
            marginTop: '-320px',
            textAlign: 'center',
            position: 'absolute',
            fontSize: '32px',
            color: 'black',
            textShadow: '2px 2px 4px #000000',

          }}

        >{user.Personal_name}</Typography>



        <Typography style={{ marginTop: '-200px', textAlign: 'left', position: 'absolute', fontSize: '15px', color: '#black', fontWeight: "600" }}>Email : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>{user.Personal_email}</p> </Typography>
        <Typography style={{ marginTop: '-160px', textAlign: 'left', position: 'absolute', fontSize: '15px', color: '#black', fontWeight: "600" }}>Contact Number :<p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>{user.Company_contact_no}</p></Typography>
        <Typography style={{ marginTop: '-120px', textAlign: 'left', position: 'absolute', fontSize: '15px', color: '#black', fontWeight: "600" }}>Address : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>{user.Company_address}</p></Typography>
        <Typography style={{ marginTop: '-80px', textAlign: 'left', position: 'absolute', fontSize: '15px', color: '#black', fontWeight: "600" }}>Company : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>{user.Company_name}</p></Typography>
        <Typography style={{ marginTop: '-40px', textAlign: 'left', position: 'absolute', fontSize: '15px', color: '#black', fontWeight: "600" }}>Company Email : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>{user.Company_email}</p></Typography>


      </Box>
      <Box
        width="25rem"
        height="25rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top="82%"
        left="37.5%"
        transform="translate(-50%, -50%)"
      >
        <Typography color="black" fontSize='12px' fontWeight='400' textAlign='justify' style={{ marginTop: "-110px" }} >
          {user.Description}

        </Typography>


      </Box>

      <div style={{ marginTop: "40rem", display: "flex", flexDirection: "row" }}>
        <div className="card mb-4" style={{ width: "45rem", marginLeft: "10rem" }}>
          <div className="card-header">Account Details</div>
          <div className="card-body">
            <form onSubmit={updateDetails}>

              <div className="mb-3">
                <label className="small mb-1" htmlFor="inputUsername">Your Organization Name</label>
                <input className="form-control" id="inputUsername" type="text" placeholder="Enter your Organization Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
              </div>


              <div className="row gx-3 mb-3">

                <div className="col-md-6">
                  <label className="small mb-1" for="inputFirstName">Organization Email</label>
                  <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your organization email" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} />
                </div>

                <div className="col-md-6">
                  <label className="small mb-1" for="inputLastName">Organization Contact Number</label>
                  <input className="form-control" id="inputLastName" type="text" placeholder="Enter your Organization contact number" value={companyContactNo} onChange={(e) => setCompanyContactNo(e.target.value)} />
                </div>
              </div>

              <div className="row gx-3 mb-3">

                <div className="col-md-6">
                  <label className="small mb-1" for="inputOrgName">Organization Address</label>
                  <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization address" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} />
                </div>

                <div className="col-md-6">
                  <label className="small mb-1" for="inputLocation">Personal Name</label>
                  <input className="form-control" id="inputLocation" type="text" placeholder="Enter your personal name" value={personalName} onChange={(e) => setpersonalName(e.target.value)} />
                </div>
              </div>

              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">Personal Email</label>
                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your personal email address" value={personalEmail} onChange={(e) => setPersonalEmail(e.target.value)} />
              </div>

              <div className="row gx-3 mb-3">

                <div className="col-md-6">
                  <label className="small mb-1" for="inputPhone">Personal Contact Number </label>
                  <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your personal contact number" value={personalContactNumber} onChange={(e) => setPersonalContactNumber(e.target.value)} />
                </div>

                <div className="col-md-6">
                  <label className="small mb-1" for="inputBirthday">Personal Address</label>
                  <input className="form-control" id="inputBirthday" type="text  " name="birthday" placeholder="Enter your personal address" value={personalAddress} onChange={(e) => setPersonalAddress(e.target.value)} />
                </div>
              </div>

              <div className="row gx-6 mb-6">
                <div className="col-md-12">
                  <label className="small mb-1" for="inputBirthday">Description</label>
                  <textarea class="form-control" id="textAreaExample" rows="10" cols='50' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
              </div>

              <button className="btn btn-primary" style={{ backgroundColor: "#3da58a", borderStyle: "none", marginTop: "30px" }} type="submit">Save changes</button>
            </form>
          </div>
        </div>

        <div className="card mb-4" style={{ width: "35rem", marginLeft: "2rem" }}>
          <div className="card-header">Manage your Images </div>
          <div className="card-body">
            <Form encType="multipart/form-data" onSubmit={updatePropic}>
              <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleCatImg}
                  style={{ width: "300px", marginLeft: "200px", marginTop: "50px" }}
                />
                <Button
                  variant="contained"
                  startIcon={<CloudUploadOutlinedIcon />}
                  style={{ backgroundColor: "#3da58a", borderStyle: "none", marginTop: "-70px" }}
                  type="submit"
                >
                  Update
                </Button>
              </Form.Group>
            </Form>

            <Form encType="multipart/form-data" onSubmit={updateGal}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p>upload image to the gellery and you can remove existing images also here is the option to manage your gellery.</p>

                <Form.Control
                  type="file"
                  accept="images/*"
                  multiple
                  onChange={handleGalImg}
                  style={{ width: "300px", marginLeft: "200px", marginTop: "50px" }}
                />
                <Button
                  variant="contained"
                  startIcon={<CloudUploadOutlinedIcon />}
                  style={{ backgroundColor: "#3da58a", borderStyle: "none", marginTop: "-70px" }}
                  type="submit"
                >
                  Manage Gallery
                </Button>
                <p style={{ color: "red" }}>Maximum 12 images only</p>
              </Form.Group>
            </Form>

            <Box padding='10px' width="400px" marginLeft='auto' marginRight='auto'>
              <Masonry columnsCount={3} gutter="10px">
                {user.ImagesCom.map((image, i) =>

                  <img
                    key={i}
                    src={`http://localhost:5000/${image.img}`}
                    style={{ width: "100%", display: "block", cursor: "pointer" }}
                    onClick={() => viewImage(image.img, i)}
                  />

                )
                }

              </Masonry>
            </Box>

          </div>
        </div>
      </div >


      <div className="card mb-4" style={{ width: "1300px", marginLeft: "auto", marginRight: 'auto', padding: "10px 10px 10px 10px" }}>
        <div className="card-header">Your gallery</div>
        <div className="card-body">

          <Masonry columnsCount={3} gutter="10px">
            {user.ImagesCom.map((image, i) => (
              <img
                key={i}
                src={`http://localhost:5000/${image.img}`}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
          <div style={{ marginTop: "20px" }}>
            <h3><center>You are in end of the gellery..!</center></h3>
          </div>
        </div>
      </div>

    </>

  )
}

export default dashboard