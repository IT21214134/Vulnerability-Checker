import React from 'react';
import { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, Navigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { SignUp } from '../../actions/authActions';
import toast from 'react-hot-toast'
import { faSignInAlt, faUser, faUnlockAlt, faBriefcase, faBicycle, faCar, faCarSide, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';

const index = () => {
    const [Company_name, setCompany_name] = useState('')
    const [Company_email, setCompany_email] = useState('')
    const [Company_contact_no, setCompany_contact_no] = useState('')
    const [Company_address, setCompany_address] = useState('')
    const [Personal_name, setPersonal_name] = useState('')
    const [Personal_contact_no, setPersonal_contact_no] = useState('')
    const [Personal_address, setPersonal_address] = useState('')
    const [Personal_email, setPersonal_email] = useState('')
    const [Password, setPassword] = useState('')
    const [image, setImage] = useState('')
    const loading = useSelector(state => state.auth.loading)
    const authenticated = useSelector(state => state.auth.authenticated)


    const dispatch = useDispatch();

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

    const sendData = (e) => {

        e.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (Company_name === '') {
            toast.error("Please enter company name..", {
                id: 'comname'
            })
        }
        else if (Company_email === '') {
            toast.error("Please Provide a Company email..", {
                id: 'comemail'
            })
        }
        else if (!emailRegex.test(Company_email)) {
            toast.error("Please Provide a Company email..", {
                id: 'comemail'
            })
        }
        else if (Company_contact_no === '') {
            toast.error("Please Provide a Contact No..", {
                id: 'comcontactno'
            })
        }
        else if (Company_address === '') {
            toast.error("Please Provide Your Company Email..", {
                id: 'comemail'
            })
        }
        else if (Personal_name === '') {
            toast.error("Please Provide Your personal name..", {
                id: 'pname'
            })
        }
        else if (Personal_contact_no === '') {
            toast.error("Please Provide Your personal contact no..", {
                id: 'pnumber'
            })
        }
        else if (Personal_address === '') {
            toast.error("Please Provide Your personal address..", {
                id: 'paddress'
            })
        }
        else if (Personal_email === '') {
            toast.error("Please Provide Your personal email ..", {
                id: 'pmail'
            })
        }
        else if (!emailRegex.test(Personal_email)) {
            toast.error("Please Provide a Valid personal Email...", {
                id: 'valpEmail'
            })
        }
        else if (Password === '') {
            toast.error("Please Provide a Password..", {
                id: 'pwd'
            })
        }
        else if (Password.length < 8) {
            toast.error("Password should be at least 8 characters long", {
                id: 'pwdLength'
            })
        }

        else if (Company_name !== '' && Company_email !== '' && Company_contact_no !== '' && Company_address !== '' && Personal_name !== '' && Personal_contact_no !== '' && Personal_address !== '' && Personal_email !== '' && Password !== '') {
            const form = new FormData();
            form.append('Company_name', Company_name);
            form.append('Company_email', Company_email);
            form.append('Company_contact_no', Company_contact_no);
            form.append('Company_address', Company_address);
            form.append('Personal_name', Personal_name);
            form.append('Personal_contact_no', Personal_contact_no);
            form.append('Personal_address', Personal_address);
            form.append('Personal_email', Personal_email);
            form.append('Password', Password);
            form.append('ProfilePicture', image);

            const form2 = {
                Company_email: Company_email,
                Password: Password
            }

            dispatch(SignUp(form, form2))
            setCompany_name('')
            setCompany_email('')
            setCompany_contact_no('')
            setCompany_address('')
            setPersonal_name('')
            setPersonal_contact_no('')
            setPersonal_address('')
            setPersonal_email('')
            setPassword('')
            setImage(null)

        }

    }
    const handleCatImg = (e) => {
        setImage(e.target.files[0]);

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
    }

    return (


            <section className="vh-100" >
                <div className="container-fluid" style={{ backgroundImage: `url('https://th.bing.com/th/id/R.dde94b0bb9c08c01f57e7dfe47bd6a1c?rik=do7j1ZUvxsznYw&pid=ImgRaw&r=0')` }}> <br />
                    <br /><div className="row">
                        <div >
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



                                        <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                            <form onSubmit={sendData}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={6}>
                                                        <Box >
                                                            <TextField
                                                                fullWidth
                                                                required
                                                                id="Company name"
                                                                label="Company name"
                                                                name="Company name"
                                                                value={Company_name}
                                                                onChange={(e) => { setCompany_name(e.target.value) }}
                                                            />


                                                        </Box>

                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            id="Company_email"
                                                            label="Company email"
                                                            name="Company_email"
                                                            value={Company_email}
                                                            onChange={(e) => { setCompany_email(e.target.value) }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            id="Company_contact_no"
                                                            label="Company contact_no"
                                                            name="Company_contact_no"
                                                            value={Company_contact_no}
                                                            onChange={(e) => { setCompany_contact_no(e.target.value) }}

                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            id="Company_address"
                                                            label="Company address"
                                                            name="Company_address"
                                                            value={Company_address}
                                                            onChange={(e) => { setCompany_address(e.target.value) }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            id="Personal_name"
                                                            label="Personal name"
                                                            name="Personal_name"
                                                            value={Personal_name}
                                                            onChange={(e) => { setPersonal_name(e.target.value) }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            id="Personal_contact_no"
                                                            label="Personal contact no"
                                                            name="Personal_contact_no"
                                                            value={Personal_contact_no}
                                                            onChange={(e) => { setPersonal_contact_no(e.target.value) }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            id="Personal_address"
                                                            label="Personal address"
                                                            name="Personal_address"
                                                            value={Personal_address}
                                                            onChange={(e) => { setPersonal_address(e.target.value) }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            id="Personal_email"
                                                            label="Personal email"
                                                            name="Personal_email"
                                                            value={Personal_email}
                                                            onChange={(e) => { setPersonal_email(e.target.value) }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            id="password"
                                                            label="Password"
                                                            name="Password"
                                                            value={Password}
                                                            onChange={(e) => { setPassword(e.target.value) }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label >Profile picture</Form.Label>
                                                            <Form.Control
                                                                type='file'
                                                                onChange={(e) => { handleCatImg(e) }}

                                                            />

                                                        </Form.Group>
                                                    </Grid>
                                                </Grid>

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
                                                    }}>Sign Up</motion.button>
                                                <Grid container justifyContent="flex-end">
                                                    <Grid item>
                                                        <Link to="/login" variant="body2" className='link'>
                                                            Already have an account? Sign in
                                                        </Link>
                                                    </Grid>
                                                </Grid>

                                            </form>
                                        </div>
                                        <br/><br/>


                                        <div class="tab-content">
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

    )
}

export default index