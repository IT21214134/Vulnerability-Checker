import React, { useEffect, useState } from 'react'
import { Box, Typography, Button } from "@mui/material";
import fort from '../../../assets/fort.jpg'
import DashHeader from '../../component/DashHeader';
import { clientAll } from '../../actions/sellerPostAction'
import { useDispatch, useSelector } from 'react-redux';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import '../Cpanel/cssfiles/card.css'
import Header from '../../../IT21042560/header';

const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clientAll())
    }, [])

    const all = useSelector(state => state.post.allPost)
    console.log(all)


    //search function
    const [serQuary, setSerQuary] = useState("");

    const SearchTrip = (event) => {
        setSerQuary(event.target.value);
    }



    return (
        <div>
            <Header/>
            <div
                style={{
                    backgroundImage: `url(${fort})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '400px',
                    backgroundPosition: 'center center',
                    filter: 'brightness(50%)',

                }}
            />

            <Box display='flex' justifyContent="space-between" alignItems="center" position="relative" zIndex='1' marginTop='-100px' paddingLeft='100px'>
                <DashHeader title='Trip Plans' subtitle='Welcome to  Ceylon Tours' />
            </Box>

            <div>
                <br></br>
                <input
                    onChange={SearchTrip}
                    className='form-control'
                    type='search'
                    placeholder='search'
                    value={serQuary}
                    name='searchQuery'
                    style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                </input>
                <br></br>

                <br />
            </div>

            {all.filter(e =>
                e.Trip_Name.toLowerCase().includes(serQuary) ||
                e.Destinations.toLowerCase().includes(serQuary) ||
                e.Price.includes(serQuary) ||
                e.No_Of_Days.includes(serQuary) ||
                e.Activities.toLowerCase().includes(serQuary)
            ).map((data, index) => (
                <article className="postcard light red" key={index} style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
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

                            <Link to={'/plans/' + data.Trip_ID}>
                                <Button style={{ backgroundColor: '#d48600', borderWidth: '3px', marginRight: "5px", color: "black" }}>View more...</Button>
                            </Link>

                        </ul>
                    </div>
                </article>
            ))}

        </div>
    )
}

export default Home