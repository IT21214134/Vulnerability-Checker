import React, { useEffect, useState } from 'react'
import DashHeader from '../../component/DashHeader'
import galle from '../../../assets/galle.jpg'
import ella from '../../../assets/ella.jpg'
import { Box, Typography, Button, Grid } from "@mui/material";
import './dash.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './cssfiles/card.css'
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBCardFooter } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts,deletePost } from '../../actions/sellerPostAction'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const TripPlans = () => {

  
 

  const dispatch = useDispatch()
  const id = {
    Seller_ID: localStorage.Seller_ID
  }

  useEffect(() => {
    dispatch(getAllPosts(id))
  }, [])

  const posts = useSelector(state => state.post.posts)
  console.log(posts)

  posts.map((data, i) => {
    console.log(i)
    console.log(data)
  })

const deletefunction =(data) => {
  const form ={
    Seller_ID: data.Seller_ID,
    Trip_ID: data.Trip_ID
  }

  Swal.fire({
    title: 'Are you sure want to Delete this Post?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#008000',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!',
    cancelButtonText: 'No!'

}).then(async (result) => {
    if (result.isConfirmed) {
      dispatch(deletePost(form))
       
    }
})
  
}


  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${galle})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '400px',
          backgroundPosition: 'center center',
          filter: 'brightness(50%)',

        }}
      />

      <Box display='flex' justifyContent="space-between" alignItems="center" position="relative" zIndex='1' marginTop='-100px' paddingLeft='100px'>
        <DashHeader title='Your Trips' subtitle='Welcome to your Trips Dashboard' />
      </Box>


      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">LISTED POSTS</div>

          {posts.map((data, index) => (
            <article className="postcard light red" key={index}>
              <a className="postcard__img_link" href="#">
                <img className="postcard__img" src={`http://localhost:5000/${data.Thumbnail}`} alt="Image Title" />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title red"><a href="#">{data.Trip_Name}</a></h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i> {new Date(data.createdAt).toLocaleDateString('en-GB')}
                    <i className="fas fa-calendar-alt mr-2" style={{ marginLeft: "20px" }}><LocationOnOutlinedIcon /></i>{data.Destinations}
                    <i className="fas fa-calendar-alt mr-2" style={{ marginLeft: "20px" }}><Person2OutlinedIcon /></i>Per person based
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">{data.About_Trip}</div>
                <div>
                  Price : ${data.Price}
                </div>
                <ul className="postcard__tagbox">

                <Link to ={'/details/'+data.Trip_ID}>
                  <Button style={{ backgroundColor: '#d48600', borderWidth: '3px', marginRight: "5px", color: "black" }}>View more...</Button>
                </Link>
                  <Button style={{ backgroundColor: 'red', borderWidth: '3px', marginRight: "5px", color: "white"  }} onClick={(e) => {deletefunction(data)}}><DeleteOutlineOutlinedIcon />Delete</Button>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>







    </div>
  )
}

export default TripPlans