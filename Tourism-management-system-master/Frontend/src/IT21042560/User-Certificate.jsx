import React from 'react';
import './assest/css/styleCertificate.css';
import Header from './header';
import i1 from './assest/images/s1.png';
import i2 from './assest/images/s2.png'
import i3 from './assest/images/s3.png'
import i4 from './assest/images/s4.png'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function Certificate() {

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
      const currentDate = new Date();

      const getUser = () => {
        console.log("hi")
        axios.get(`http://localhost:9020/user/user/${id}`).then((res)=>{

            setUserId(res.data.user.user_id);
            setUserName(res.data.user.userName);
            setBirthday(res.data.user.birthday);
            setCountry(res.data.user.country);
            setEmail(res.data.user.email);
            setPassword(res.data.user.password);
            setGender(res.data.user.gender);
            setTelNo(res.data.user.tel_no);
            setBadge(res.data.user.badge)
           
        }).catch((err)=>{
            alert(err.message);
        })
        }

        useEffect(() => getUser(), []);


  return (
    <>
    <div className='divbody'>
        <div class="border-pattern">
            <div class="content">
              <div class="inner-content">
                <img src={i4} width={'10%'} />
                <h1 className='divh1'>E-Certificate</h1>
                <h2 className='divh2'>of Environmental Saving </h2>
                <h3 className='divh3'><br/>This Certificate Is Proudly Presented To</h3>
                <p className='divp'>{userName}</p>
                <p className='divp' style={{ marginTop:'-30px'}}>......................................</p>
                <h3 className='divh3'>For Their Contribution To Maintain</h3>
                <p className='divp'> {badge} profile</p>
                <p className='divp' style={{ marginTop:'-30px'}}>......................................</p>
                <p className='divp' >And Help To Environmental Care in Sri Lanka</p>
                <h3 className='divh3'>Issued By</h3>
                <p className='divp' >Ceylone Tours</p>
                <h3 className='divh3'>On</h3>
                <p className='divp'>{currentDate.toLocaleDateString()}</p>
                <div>
                  <br/>
                  <div style={{marginLeft:'650px', marginTop:'-70px'}}>
                  <img src={i3}  width={'50%'} />
                  <p className='divp' style={{fontSize:'15px', marginTop:'-10px'}}> ....................<br/>Dr.Danuka Bandara<br/> Sustainable Tourism Coordinator,<br/> Ceylon Tours.</p>
                  </div>
                  <img src={i2}  width={'20%'} style={{marginTop:'-130px'}}/>
                  <img src={i1}  width={'20%'} style={{marginTop:'-230px', marginRight:'650px'}}/>
                </div>
              </div>
            </div>
        </div></div>

        <Button style={{marginLeft:'900px'}}
                        variant="primary"
                        onClick={() => {
                        window.print();
                        }}
                    >
                        Download
                    </Button> <br/>
    </>
  );
}
