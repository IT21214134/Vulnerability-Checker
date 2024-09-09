import React, { useState } from 'react';
import Header from './header';
import { motion,useCycle  } from 'framer-motion';
import { useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { faEdit,faHandPointer,faStar,faTrash  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from 'react-bootstrap';
import './assest/css/userProfile.css'
import {CardMedia} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardFooter
  } from 'mdb-react-ui-kit';
  import toast from 'react-hot-toast';
 

const colors = ["white", "#eee3e7", "#ead5dc", "#eec9d2", "#f4b6c2", "#f6abb6","pink","#f6abb6","#f4b6c2","#eec9d2","#ead5dc","#eee3e7"];

export default function UserProfile() {

    const [color, cycleColor] = useCycle(...colors);
    const {id} = useParams();

      const [user_id,setUserId] = useState('');
      const [userName,setUserName] = useState('');
      const [birthday,setBirthday] = useState('');
      const [country,setCountry] = useState('');
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');
      const [gender,setGender] = useState('');
      const [tel_no,setTelNo] = useState('');
      const [badge,setBadge] = useState('');
      const [post_count, setPostCount] = useState('');
      const [showModal, setShowModal] = useState(false);
      const [showModal1, setShowModal1] = useState(false);
      const [showModal3, setShowModal3] = useState(false);

      const [newuserName,setNewUserName] = useState('');
      const [newbirthday,setNewBirthday] = useState('');
      const [newcountry,setNewCountry] = useState('');
      const [newemail,setNewEmail] = useState('');
      const [newpassword,setNewPassword] = useState('');
      const [newgender,setNewGender] = useState('');
      const [newtel_no,setNewTelNo] = useState('');

      const [posts,setPosts] = useState([]);
      const navigate = useNavigate();

      const [post_title,setPostTitle] = useState("");
      const [post_description,setPostDescription] = useState('');
      const [post_location,setPostLocation] = useState('');
      const [post_remark, setPostRemark] = useState('');
      const [post_date,setPostDate] = useState('');
      const [post_image, setPostImage] = useState('');

      const handleShowModal = () => setShowModal(true);
      const handleCloseModal = () => setShowModal(false);

      const handleShowModal1 = () => setShowModal1(true);
      const handleCloseModal1 = () => setShowModal1(false);

      const handleShowModal3 = () => setShowModal3(true);
      const handleCloseModal3 = () => setShowModal3(false);

      const handleCatImg = (e) => {
        setPostImage(e.target.files[0]);
      }

      const getPost = () => {
        console.log("hi")
        axios.get(`http://localhost:9030/userPost/post/${id}`).then((res)=>{
            //console.log(res.data.posts);
            setPosts(res.data.posts);
        }).catch((err)=>{
            alert(err.message);
        })
        }

        useEffect(() => getPost(), [posts]);

    useEffect(() => {
        const timer = setInterval(() => {
          cycleColor();
        }, 1000);
        return () => clearInterval(timer);
      }, [cycleColor]);

      const deletePost = (e) =>{
        var result = window.confirm("Are you sure?");
      if(result == true){
          axios.delete(`http://localhost:9030/userPost/postdelete/${e}`).then((res)=>{

          axios.put(`http://localhost:9030/user/countReduce/${id}`).then(() => {
                            
            }).catch((err) =>{
        
            })


          }).catch(e =>{
              toast.success('Post Deleted Sucessfully!')
          })
      }else{
          e.preventDefault();
      }
    
    }

      const getUser = () => {
        console.log("hi")
        axios.get(`http://localhost:9030/user/user/${id}`).then((res)=>{

            setUserId(res.data.user.user_id);
            setUserName(res.data.user.userName);
            setBirthday(res.data.user.birthday);
            setCountry(res.data.user.country);
            setEmail(res.data.user.email);
            setPassword(res.data.user.password);
            setGender(res.data.user.gender);
            setTelNo(res.data.user.tel_no);
            setBadge(res.data.user.badge)
            setPostCount(res.data.post_count);
            console.log(res.data.user)
            //setImage(res.data.user.user.imageName)
           
        }).catch((err)=>{
            alert(err.message);
        })
        }

        useEffect(() => getUser(), []);

        const buttonVariants = {
            hover: {
              scale: 1.03,
              transition: {
                duration: 0.3,
              },
            },
          };
        
          const buttonStyles = {
            backgroundColor: 'blue',
            border: 'none',
            color: 'white',
            padding: '10px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px 2px',
            borderRadius: '8px',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1,
            transition: 'background-color 0.3s',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          };
        
          const iconStyles = {
            marginRight: '5px',
          };
        

  return (
    <>
        <Header/>
        
        <center>
        {
                badge == "Silver" ? 
                <div style={{ backgroundColor: "#C0C0C0",fontFamily:'Comic Sans MS', display: "flex", justifyContent: "center", alignItems: "center", fontSize: "17px", fontWeight: "bold", color: "#333", width:'30%', borderBottomRightRadius:'80px', borderTopLeftRadius:'80px' }}>
                <span style={{marginRight:'15px'}}><h2>{badge} Profile <br/></h2></span>
                <FontAwesomeIcon icon={faStar} />
                </div> : 
                badge == "Gold" ?
                <div style={{ backgroundColor: "#FFD700",fontFamily:'Comic Sans MS', display: "flex", justifyContent: "center", alignItems: "center", fontSize: "17px", fontWeight: "bold", color: "#333", width:'30%', borderBottomRightRadius:'80px', borderTopLeftRadius:'80px' }}>
                <span style={{marginRight:'15px'}}><h2>{badge} Profile <br/></h2></span>
                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                </div> : 
                badge == "Platinum" ?
                <div style={{ backgroundColor: "#E5E4E2",fontFamily:'Comic Sans MS', display: "flex", justifyContent: "center", alignItems: "center", fontSize: "17px", fontWeight: "bold", color: "#333", width:'30%', borderBottomRightRadius:'80px', borderTopLeftRadius:'80px' }}>
                <span style={{marginRight:'15px'}}><h2>{badge} Profile <br/></h2></span>
                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                </div> : null
            } <br/>
            <div style={{marginLeft:'990px', marginTop:'-60px'}}>
             <Link to={`/user/profile/certificate/${id}`}>
                <a href='' style={{fontFamily:'MV Boli', color:'black', textDecoration: 'none', fontSize:'20px'}}>Get Your Certificate</a>
                </Link> <br/> <br/> <br/>
            </div>
        <motion.div
            style={{
                width: "96%",
                border: "2px solid white",
                borderRadius: "20px",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333",
                backgroundColor:"white",
            }}
            >
            <div style={{ position: "relative" }}>
            <img src="https://th.bing.com/th/id/R.e246989a2c6af5458b9eb6747f104418?rik=pVgGC6lJ4Y34cA&pid=ImgRaw&r=0" style={{ height: "500px", width: "98%", marginTop:'10px', borderRadius:'20px' }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="right-angle" style={{backgroundColor:'white', marginRight:'850px', height:'500px', marginTop:'10px', borderBottomLeftRadius:'20px', borderTopLeftRadius:'20px',opacity: 0.5

        }}>
            <style>
                {`
                .right-angle::after {
                content: "";
                position: absolute;
                top: 10px;
                right: 760px;
                width: 1px;
                height: 20px;
                border-left: 92px solid white ;
                border-top: 500px solid transparent;
                opacity: 0.8
                }
                `}
            </style>
            <div className="right-angle"></div>
           <br/>
            <motion.h1
                style={{ 
                    fontSize: "30px", 
                    fontWeight: "bold",  
                    padding: "20px", 
                    fontStyle: "italic",
                    textShadow: "2px 2px white",
                    color: "black",
                    transition: "color 0.10s ease",
                    fontFamily:'Myanmar Text'
                }}
                >
                <br/>Hello {userName} ! <br/>
                <span style={{ color: 'black'}}>Welcome to Your Profile </span>
                {/* <span style={{ color: 'black', }}> Your Profile</span> */}
                </motion.h1> 
                
                <Button style={{marginLeft:'12px',color:'white',  backgroundColor:'black', borderColor:'black', marginTop:'150px'}} onClick={handleShowModal}>View Your Profile <FontAwesomeIcon icon={faHandPointer} /></Button>
                <br/>
               
                </div>

            </div>
            </div>
             <br/> <br/>
           <h2 style={{fontFamily:'Rockwell', fontSize:'40px'}}>Your Status</h2>

         <MDBRow className='row-cols-1 row-cols-md-2 g-4 no-border'>
        {posts.map(post => (
            <MDBCol > 
            <MDBCard style={{ border: "none" }}>
            <button className="btn btn-block mb-2" 
                         style={{  backgroundColor:'DodgerBlue', borderColor:'white', borderRadius: "20px", color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0,0,0,0.4)", transition: "all 0.3s ease", width:'20%' }}
                        onClick={handleShowModal1}
                        >Edit <FontAwesomeIcon icon={faEdit} />
                          </button>

                          <button className="btn btn-block mb-2" 
                         style={{  backgroundColor:'#8b0000', borderColor:'white', borderRadius: "20px", color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0,0,0,0.4)", transition: "all 0.3s ease", width:'20%' , marginLeft:'400px', marginTop:'-45px'}}
                        onClick={() => {deletePost(post._id)}}
                        >Delete <FontAwesomeIcon icon={faTrash} />
                          </button>
                        <br/>

                          <CardMedia component="img" image={`http://localhost:5000/${post.post_image}`} alt={post.post_image}  />
                
                 <MDBCardBody >
            
                <MDBCardTitle style={{ fontSize: "25px" }}>{post.post_title}</MDBCardTitle>
                <MDBCardText style={{ fontSize: "16px" }}>
                    {post.post_description}
                </MDBCardText>
                <MDBCardText style={{ fontSize: "14px" }}>
                    Location - {post.post_location}
                </MDBCardText>
                <MDBCardText style={{ fontSize: "14px" }}>
                    Remark - {post.post_remark}
                </MDBCardText>
                <MDBCardFooter style={{borderRadius:'10px'}}>
                <small className='text-muted' style={{ fontSize: "10px" }}>{post.post_date}</small>
                </MDBCardFooter>
            </MDBCardBody>
            </MDBCard>

            
            <Modal show={showModal1} onHide={handleCloseModal1}>
        <Modal.Header closeButton>
          <Modal.Title>Post Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div >
            <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                <form onSubmit={(e) => {
                            e.preventDefault();

                            
                        
                      const form =new FormData();

                      form.append('user_id', post.user_id);
                      form.append('post_title', post_title);
                      form.append('post_description', post_description);
                      form.append('post_date', post_date);
                      form.append('post_location', post_location);
                      form.append('post_remark', post_remark);
                      form.append('post_image', post_image);
                                    
                            axios.put(`http://localhost:5000/userPost/postupdate/${post._id}`, form)
                            .then(() => {
                                toast.success('Event Updated');
                                navigate(`/user/profile/${id}`);
                            })
                            .catch((err) => {
                                alert(err);
                            })
                        }}>
                <br/>
                                        <div className="row">{post._id}
                                            <div className="col-md-12">
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="registerName">Post Title</label>
                                                <input type="text" id="registerName" className="form-control" onChange={(e) => setPostTitle(e.target.value)} />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="registerName">Post Description</label>
                                                <textarea rows={'10'} cols={'10'} id="registerName" className="form-control" onChange={(e) => setPostDescription(e.target.value)} placeholder=""/>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="registerName">Date</label>
                                                <input type="date" id="registerName" className="form-control" onChange={(e) => setPostDate(e.target.value)} placeholder=""/>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="registerName">Location</label>
                                                <input type="text" id="registerName" className="form-control" onChange={(e) => setPostLocation(e.target.value)} placeholder=""/>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="registerName">Remark</label>
                                                <textarea rows={'5'} cols={'5'} id="registerName" className="form-control" onChange={(e) => setPostRemark(e.target.value)} placeholder=""/>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="registerName">Upload</label>
                                                <input type="file" id="registerName" className="form-control" onChange={(e) => handleCatImg(e)} placeholder=""/>
                                            </div>
                                            </div>
                                        </div>


                                        
                                        <motion.button type="submit" className="btn btn-primary btn-block mb-3" 
                                        style={{
                                            background:
                                            "linear-gradient(90deg, #6a11cb, #2575fc, #007fff)",
                                            borderRadius: "20px",
                                            color: "white",
                                            fontWeight: "bold",
                                            textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                                            transition: "all 0.3s ease",
                                            marginLeft: "10px",
                                        }}>Update</motion.button>
                                      

                                    </form>
                                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </MDBCol>

            
            
        ))}
           
        </MDBRow>
        </motion.div>
        

        </center>

        <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Personal Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <center >
                    <div className="profile-details">
                        <h5 className="profile-details__title">Name - </h5>
                        <p className="profile-details__value">{userName}</p>
                    </div>
                    <div className="profile-details">
                        <h5 className="profile-details__title">Birthday - </h5>
                        <p className="profile-details__value">{birthday}</p>
                    </div>
                    <div className="profile-details">
                        <h5 className="profile-details__title">Country - </h5>
                        <p className="profile-details__value">{country}</p>
                    </div>
                    <div className="profile-details">
                        <h5 className="profile-details__title">Email - </h5>
                        <p className="profile-details__value">{email}</p>
                    </div>
                    <div className="profile-details">
                        <h5 className="profile-details__title">Gender - </h5>
                        <p className="profile-details__value">{gender}</p>
                    </div>
                    <div className="profile-details">
                        <h5 className="profile-details__title">Tel No - </h5>
                        <p className="profile-details__value">{tel_no}</p>
                    </div>
                    </center>
                    <div className="edit-button-container">
                    <motion.button 
                        type="submit" 
                        className="edit-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleShowModal3}
                    >
                        Edit
                    </motion.button>
                    </div> 

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                        </Button>
                    </Modal.Footer>
                    </Modal> 
        
        
                    <Modal show={showModal3} onHide={handleCloseModal3}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Personal Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <center >
                        <form onSubmit={(e) => {
                            e.preventDefault();

                            const newUsr = {
                                user_id,
                                newuserName,
                                newbirthday,
                                newemail,
                                newpassword,
                                newcountry,
                                newgender,
                                badge,
                                newtel_no,
                                post_count
                            }
                            axios.put(`http://localhost:5000/user/updateUser/${id}`, newUsr)
                            .then(() => {
                                toast.success('User Updated');
                                // navigate('/inventory');
                            })
                            .catch((err) => {
                                alert(err);
                            })
                        }}>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <div className="form-outline mb-4">
                                                <input type="text" id="registerName" className="form-control" onChange={(e) => setNewUserName(e.target.value)} />
                                                <label className="form-label" htmlFor="registerName">Name</label>
                                            </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div className="form-outline mb-4"> 
                                                <input type="date" id="registerUsername" className="form-control"  onChange={(e) => setNewBirthday(e.target.value)}/>
                                                <label className="form-label" htmlFor="registerUsername">Birthday</label>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <div className="form-outline mb-4">
                                                <input type="email" id="registerEmail" className="form-control" onChange={(e) => setNewEmail(e.target.value)} placeholder="ex: CeylonTours@gmail.com"/>
                                                <label className="form-label" htmlFor="registerEmail">Email</label>
                                            </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div className="form-outline mb-4">
                                                <input type="password" id="registerPassword" className="form-control" onChange={(e) => setNewPassword(e.target.value)} placeholder="ex: CeylonX11"/>
                                                <label className="form-label" htmlFor="registerPassword">Password</label>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <div className="form-outline mb-4">
                                                <input type="text" id="registerCountry" className="form-control" onChange={(e) => setNewCountry(e.target.value)} placeholder="ex: Sri Lanka"/>
                                                <label className="form-label" htmlFor="registerCountry">Country</label>
                                            </div>
                                            </div>
                                            <div className="col-md-6">
                                        <div className="form-outline mb-4">
                                            <select className="form-select" id="registerGender" onChange={(e) => setNewGender(e.target.value)}>
                                            <option selected disabled>Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            </select>
                                            <label className="form-label" htmlFor="registerGender">Gender</label>
                                        </div>
                                        </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <div className="form-outline mb-4">
                                                <input type="text" id="registerCountry" className="form-control" onChange={(e) => setNewTelNo(e.target.value)} placeholder="ex: +255 589 4225"/>
                                                <label className="form-label" htmlFor="registerCountry">Tel No</label>
                                            </div>
                                            </div>
                                           

                                        </div>

                                        
                                        <motion.button type="submit" className="btn btn-block mb-3" 
                                        style={{
                                            background:
                                            "linear-gradient(90deg, #8B0000, #CD5C5C, #B22222,#CD5C5C, #8B0000)",
                                            borderRadius: "20px",
                                            color: "white",
                                            fontWeight: "bold",
                                            textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                                            transition: "all 0.3s ease",
                                            marginLeft: "10px",
                                        }}>Update</motion.button>
                    
                    </form>
                    </center>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal3}>
                        Close
                        </Button>
                    </Modal.Footer>
                    </Modal>
    </>
  );
}