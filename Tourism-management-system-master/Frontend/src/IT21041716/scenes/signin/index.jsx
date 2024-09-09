import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, Navigate } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../../actions/authActions';
import toast from 'react-hot-toast'
import { faSignInAlt, faUser, faUnlockAlt, faBriefcase, faBicycle, faCar, faCarSide, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';




const SignIn = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const authenticating = useSelector(state => state.auth.authenticating)
    const authenticated = useSelector(state => state.auth.authenticated)
    const Company_email = email;
    const Password = passwd;

    //toast
    useEffect(() => {
        if (authenticating === true) {
            toast.loading("Cheking...", {
                id: 'cheking'
            })
        }
        else if (authenticating === false) {
            toast.dismiss('cheking')
        }
    })

    const sellerLogin = (e) => {
        e.preventDefault();

        if (email === '') {

            toast.error("Please Provide An Email..!", {
                id: "email"
            })
        }
        else if (passwd === '') {

            toast.error("Please Provide the Password..!", {
                id: "'password'"
            })
        }
        else if (email === '' && passwd === '') {

            toast.error("Please provide the Credentials...!", {
                id: "credential"
            })
        }

        else if (email !== '' & passwd !== '') {
            const seller = {
                Company_email,
                Password
            }



            dispatch(Login(seller));
            setEmail('');
            setPasswd('');
        }
    }

    const loaderVariants = {
        animationOne: {
          x: [-150, 150],
          transition: {
            x: {
              yoyo: Infinity,
              duration: 15,
              repeat: Infinity,
            },

          }
        }
      };
      
    if (authenticated) {
        return <Navigate to='/dashboard' />
    };


    return (

        <>
            <section className="vh-100" >
                <div className="container-fluid" style={{ backgroundImage: `url('https://th.bing.com/th/id/R.dde94b0bb9c08c01f57e7dfe47bd6a1c?rik=do7j1ZUvxsznYw&pid=ImgRaw&r=0')` }}> <br />
                    <br /><div className="row">
                    <div style={{marginTop:"80px",marginBottom:"80px"}} >
                            <center>

                                <motion.div style={{ border: "2px solid #8B4513", backgroundColor: "#f0f3ff", borderRadius: "20px", padding: "10px", width: "40%" }}
                                    transition={{ delay: 0.2, duration: 2.0, type: 'spring', stiffness: 120 }}
                                    whileHover={{ boxShadow: "0px 0px 8px rgb(255,255,255)", scale: 1.03 }}
                                ><h3>Ceylon Tours </h3> <hr />


                                    <div className="px-5 ms-xl-4">
                                        <i
                                            className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                                            style={{ color: "#709085" }}
                                        ></i>

                                        <motion.span
                                            className="h1 fw-bold mb-0"
                                            whileHover={{ scale: 1.3, color: ['#f8e112', '#ff00ff', '#00ffff'], originX: 0 }}
                                            transition={{ type: 'spring', stiffness: 500 }}
                                        >

                                            <span style={{ background: "-webkit-linear-gradient(#800000, #A52A2A, #A0522D)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent", textAlign: "center" }}>ආයුබෝවන් !</span> <br />
                                            <span style={{ background: "-webkit-linear-gradient(#800000, #A52A2A, #A0522D)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent", textAlign: "center" }}>WELCOME !</span> <br />


                                        </motion.span>

                                    </div> <br />
                                    <motion.div
                                        className="loader"
                                        variants={loaderVariants}
                                        animate="animationOne"
                                    >
                                        <FontAwesomeIcon icon={faPlane} />
                                    </motion.div>
                                    <div style={{ width: '80%' }}>

                                        <br />
                                        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login" style={{ width: '80%' }}>
                                            <form onSubmit={sellerLogin}> <br />

                                                <div className="form-outline mb-4"><br />
                                                    <input type="email" id="loginName" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                    <label className="form-label" htmlFor="loginName">Email</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="loginPassword" className="form-control" value={passwd} onChange={(e) => setPasswd(e.target.value)} />
                                                    <label className="form-label" htmlFor="loginPassword">Password</label>
                                                </div>

                                                <button type="submit" className="btn btn-block mb-4"
                                                    style={{ background: "linear-gradient(90deg, #8B0000, #CD5C5C, #B22222,#CD5C5C, #8B0000)", borderRadius: "20px", color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0,0,0,0.4)", transition: "all 0.3s ease" }}
                                                    whileHover={{
                                                        scale: 1.1,
                                                        textShadow: "0px 0px 8px rgb(255,255,255)",
                                                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                                                    }} >Sign in</button>

                                                <div className="text-center">
                                                    <p style={{ color: "grey" }}>Not a member? <a href="/signup" style={{ color: "#6a11cb", textDecoration: "underline" }} >Register</a></p>
                                                </div>
                                            </form>
                                        </div>



                                        <div class="tab-content" style={{paddingBottom:"50px"}}>
                                            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                            </div>
                                            <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">

                                            </div>
                                        </div>

                                        <span style={{ background: "-webkit-linear-gradient(#f8e112, #ff00ff, #00ffff)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent" }}># VISIT SRI LANKA</span>
                                    </div></motion.div></center>
                        </div>
                    </div> <br /> <br />
                </div>
            </section>


        </>

    )
}

export default SignIn