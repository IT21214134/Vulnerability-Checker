import React, { useState, useEffect } from 'react'
import sigiriya from '../../../assets/sigiria.jpg'
import DashHeader from '../../component/DashHeader'
import { Box, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { AddTrip ,updateImages } from '../../actions/sellerPostAction'
import { toast } from 'react-hot-toast'
import { Form } from 'react-bootstrap'


const addTrip = () => {


  const loading = useSelector(state => state.post.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    if (loading === true) {
      toast.loading('Loading...', {
        id: 'loading'
      })
    }
    else if (loading === false) {
      toast.dismiss('loading')
    }

  }, [loading]);


  // hooks 


  const [Trip_ID, setTrip_ID] = useState("")
  const [Trip_Name, setTrip_Name] = useState("")
  const [No_Of_Days, setNo_Of_Days] = useState("")
  const [Price, setPrice] = useState("")
  const [Accomodation, setAccomodation] = useState("")
  const [Meals, setMeals] = useState("")
  const [Transport, setTransport] = useState("")
  const [About_Trip, setAbout_Trip] = useState("")
  const [What_will_You_Do, setWhat_will_You_Do] = useState("")
  const [Thumbnail, setThumbnail] = useState(undefined)
  const [Images, setImages] = useState("")
  const [Destinations, setDestinations] = useState("")
  const [Activities, setActivities] = useState("")



  const sendData = (e) => {

    e.preventDefault()

  if (Trip_Name === '') {
      toast.error("Please Provide a Trip_Name..", {
        id: 'comemail'
      })
    }
    else if (No_Of_Days === '') {
      toast.error("Please Provide No_Of_Days..", {
        id: 'a'
      })
    }
    else if (Price === '') {
      toast.error("Please Provide a Price..", {
        id: 'b'
      })
    }
    else if (Accomodation === '') {
      toast.error("Please Provide a Accomodation..", {
        id: 'c'
      })
    }
    else if (Meals === '') {
      toast.error("Please Provide a Meals..", {
        id: 'd'
      })
    }
    else if (Transport === '') {
      toast.error("Please Provide Transport..", {
        id: 'e'
      })
    }
    else if (About_Trip === '') {
      toast.error("Please Provide About_Trip..", {
        id: 'f'
      })
    }
    else if (What_will_You_Do === '') {
      toast.error("Please type What_will_You_Do..", {
        id: 'g'
      })
    }
    else if (Thumbnail === '') {
      toast.error("Please Provide a Thumbnail..", {
        id: 'h'
      })
    }
    else if (Destinations === '') {
      toast.error("Please Provide Destinations..", {
        id: 'i'
      })
    }
    else if (Activities === '') {
      toast.error("Please Provide Activities..", {
        id: 'i'
      })
    }
    else {
      const form = new FormData();
      form.append("Seller_ID", localStorage.Seller_ID);
      form.append("Trip_Name", Trip_Name);
      form.append("No_Of_Days", No_Of_Days);
      form.append("Price", Price);
      form.append("Accomodation", Accomodation);
      form.append("Meals", Meals);
      form.append("Transport", Transport);
      form.append("About_Trip", About_Trip);
      form.append("What_will_You_Do", What_will_You_Do);
      form.append("Thumbnail", Thumbnail);
      form.append("Destinations", Destinations);
      form.append("Activities", Activities);


      dispatch(AddTrip(form))
      setTrip_Name('')
      setNo_Of_Days('')
      setPrice('')
      setAccomodation('')
      setMeals('')
      setTransport('')
      setWhat_will_You_Do('')
      setThumbnail(undefined)
      setDestinations('')
      setActivities('')
      setAbout_Trip('')
    }

  }
  const handleCatImg = (e) => {
    setThumbnail(e.target.files[0]);

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

  const updateImages = (e) => {
    e.preventDefault()

    const form = {
      Seller_ID: localStorage.Seller_ID,
      ImagesCom :imgArray
    }


    dispatch(updateImages(form))
  }

  return (
    <div>

      <div
        style={{
          backgroundImage: `url(${sigiriya})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '400px',
          backgroundPosition: 'center center',
          filter: 'brightness(50%)',

        }}
      />

      <Box display='flex' justifyContent="space-between" alignItems="center" position="relative" zIndex='1' marginTop='-100px' paddingLeft='100px'>
        <DashHeader title='New Trips' subtitle='Welcome to your Trips Manager Dashboard' />
      </Box>

     
        <div className="card mb-4" style={{ width: "45rem", marginLeft: "auto", marginRight:"auto" ,marginTop:"5rem"}}>
          <div className="card-header">Add new Trip plan</div>
          <div className="card-body">
            <form onSubmit={sendData} encType="multipart/form-data" >

              <div className="mb-3">
                <label className="small mb-1" for="inputUsername">Name for Trip</label>
                <input className="form-control" id="inputUsername" type="text" placeholder="Enter your Organization Name" value={Trip_Name} onChange={(e) => setTrip_Name(e.target.value)} />
              </div>

              <div className="row gx-3 mb-3">

                <div className="col-md-6">
                  <label className="small mb-1" for="inputFirstName">No of Days</label>
                  <input className="form-control" id="inputFirstName" type="text" placeholder="number of days" value={No_Of_Days} onChange={(e) => setNo_Of_Days(e.target.value)} />
                </div>

                <div className="col-md-6">
                  <label className="small mb-1" for="inputLastName">Price Per Person</label>
                  <input className="form-control" id="inputLastName" type="text" placeholder="Price per person" value={Price} onChange={(e) => setPrice(e.target.value)} />
                </div>
              </div>

              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">Activities</label>
                <textarea className="form-control" rows='3' col='10' id="inputEmailAddress" type="text" placeholder="Activities" value={Activities} onChange={(e) => setActivities(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">Meals</label>
                <textarea className="form-control" rows='3' col='10' id="inputEmailAddress" type="text" placeholder="Meals" value={Meals} onChange={(e) => setMeals(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">Accomodation</label>
                <textarea className="form-control" rows='3' col='10' id="inputEmailAddress" type="text" placeholder="Accomodation" value={Accomodation} onChange={(e) => setAccomodation(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">Transport</label>
                <textarea className="form-control" rows='3' col='10' id="inputEmailAddress" type="text" placeholder="Transport" value={Transport} onChange={(e) => setTransport(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">What you Will Do</label>
                <textarea className="form-control" rows='3' col='10' id="inputEmailAddress" type="text" placeholder="Type somthing here" value={What_will_You_Do} onChange={(e) => setWhat_will_You_Do(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">About the Trip</label>
                <textarea className="form-control" rows='3' col='10' id="inputEmailAddress" type="text" placeholder="Type somthing here" value={About_Trip} onChange={(e) => setAbout_Trip(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">Destinations</label>
                <textarea className="form-control" rows='3' col='10' id="inputEmailAddress" type="text" placeholder="Destinations" value={Destinations} onChange={(e) => setDestinations(e.target.value)} />
              </div>


              <div className="row gx-3 mb-3">

                <div className="col-md-6">
                  <label className="small mb-1" for="inputEmailAddress">Thumbnail</label>
                  <Form.Control
                    type='file'
                    onChange={(e) => { handleCatImg(e) }}

                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#3da58a", borderStyle: "none" }}>Save changes</button>
            </form>
          </div>
        </div>
{/*         
        <div className="card mb-4" style={{ width: "35rem", marginLeft: "2rem" }}>
          <div className="card-header">Blog appearance</div>
          <div className="card-body">
            <div className="col-md-6">
              <form onSubmit={updateImages} encType="multipart/form-data" >
                <label className="small mb-1" for="inputEmailAddress">Other Images upload here.....</label>
                <Form.Control
                    type='file'
                    multiple
                    onChange={(e) => { handleImages(e) }}

                  />

                <button  type="submit" className="btn btn-primary" style={{ backgroundColor: "#3da58a", borderStyle: "none", marginTop: "20px" }}>Save changes</button>
              </form>
            </div>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC,</p>


          </div>
        </div> */}
     

    </div >
  )
}

export default addTrip