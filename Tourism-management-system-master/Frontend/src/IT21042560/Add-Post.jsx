import React from 'react';
import {motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { faCircleDot ,faPlane    } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-hot-toast";
import Header from './header';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardFooter
  } from 'mdb-react-ui-kit';
import {CardMedia} from "@mui/material";
  

const AddPost = () => {

    const [showModal, setShowModal] = useState(false);
    const [user_id, setUserId] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postDescription, setPostDescription] = useState("");
    const [postDate, setPostDate] = useState("");
    const [postLocation, setPostLocation] = useState("");
    const [remark, setPostRemark] = useState("");
    const [post_image, setPostImage] = useState('')
    const {id} = useParams();

    const [posts, setPosts] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [userNames, setUserNames] = useState([]);

    let currentIndex = 0;

    useEffect(()=>{
        function getPosts(){
        axios.get("http://localhost:9030/userPost/allpost").then((res)=>{
            setPosts(res.data.payload);
           
            
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getPosts();
    },[])


    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleCatImg = (e) => {
        setPostImage(e.target.files[0]);
    }

    const addPost = (e) => {
        
        console.log("Hi")
                e.preventDefault();

                if (postTitle === '') {
                    toast.error("Please Enter Post Title..", {
                        id: 'name'
                    })
                }
                else if (postDescription === '') {
                    toast.error("Please Provide a Post Description..", {
                        id: 'bday'
                    })
                }
                else if (postDate === '') {
                    toast.error("Please Enter Date..", {
                        id: 'stafNo'
                    })
                }
                else if (postLocation === '') {
                    toast.error("Please Provide the Location...", {
                        id: 'email'
                    })
                }
                else if (postTitle !== '' && postDescription !== '' && postDate !== '' && postLocation !== '') {
                    const form =new FormData();
        
                    form.append('user_id', id);
                    form.append('post_title', postTitle);
                    form.append('post_description', postDescription);
                    form.append('post_date', postDate);
                    form.append('post_location', postLocation);
                    form.append('post_remark', remark);
                    form.append('post_image', post_image);
        
                    axios.post("http://localhost:9030/userPost/postadd",form).then(()=>{
                        toast.success("Successfully Uploaded Your Status");
                        


                        axios.put(`http://localhost:9030/user/count/${id}`).then(() => {
                            
                        }).catch((err) =>{
                     
                        })

                       

                    }).catch(()=>{

                    })
        
                    setUserId('')
                    setPostTitle('')
                    setPostDescription('')
                    setPostDate('')
                    setPostLocation('')
                    setPostRemark('')
                    setPostImage(null)
                    navigate(`/user/post/add/${id}`);
              }
          }
          

  return (
    <>
    <Header/>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",}}>
  <div>
    <motion.h1 style={{
        fontSize: "48px",
        fontWeight: "bold",
        color: "#333",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        marginLeft:'550px'
    }}>
      STATUS
    </motion.h1>
  </div>
  <div>
    <button onClick={handleShowModal} className="btn btn-block mb-4" 
            style={{ marginRight:'20px', marginTop:'10px',  backgroundColor:'#800000', borderColor:'black', borderRadius: "20px", color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0,0,0,0.4)", transition: "all 0.3s ease" }}
            whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}>
      Add Status
    </button>
  </div>
</div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div >
            <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                <form onSubmit={addPost}>
                <br/>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="registerName">Post Title</label>
                                                <input type="text" id="registerName" className="form-control" onChange={(e) => setPostTitle(e.target.value)} placeholder=""/>
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
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
        {posts.map(post => (
            <MDBCol>
            <MDBCard style={{ border: "none" }}>
            {/* <MDBCardImage
                src={require(`./${post.post_image}`).default}
                alt='...'
                position='top'
            />  */}

            <CardMedia

            component="img"


            image={`http://localhost:9030/${post.post_image}`}

            alt={post.post_image}

            />

           
            {/* <img  style={{borderRadius:'20px'}}/>   src={require(`../../../Backend/UploadUserPostImages/${post.post_image}`)}*/}
           <MDBCardBody>
           <center> 
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
                </center>  </MDBCardBody> 
            </MDBCard>
            </MDBCol>
        ))}
           
        </MDBRow>
     
    </>

  )
}

export default AddPost;