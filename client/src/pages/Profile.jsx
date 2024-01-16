import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AsideBox, Header } from '../components'
import axios from 'axios';
import toast from 'react-hot-toast';

const Profile = () => {
  const [profile,setProfile] = useState('');
  const displayProfile = async () => {
    try {
      const storedToken = localStorage.getItem('token');
      //console.log(storedToken);
      if (!storedToken) {
        // Handle the case when the token is missing
        toast.error('Token is missing. Please log in.');
        return;
      }
  
      const response = await axios.get('http://localhost:8000/api/v1/users/profile', {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      console.log("response",response);
      setProfile(response.data.user);
    } catch (error) {
      toast.error('Error fetching profile:', error.response.msg);
    }
  };
  
  
  useEffect(()=>{
    displayProfile();
  },[]);
  
  return (
      <Wrapper>
      <div className='header'>
        <Header/>
    </div>
    <div className='body'>
    <main>
    <h2>{profile.fullName}</h2>
      <hr/>
      <div className='profile'>
        <div className="images">
        {profile.fullName}
        </div>
        <div className="details">

        </div>
      </div>
    </main>
    <aside>
      <AsideBox/>
    </aside>
    </div>
    </Wrapper>
    
  )
}

const Wrapper= styled.div`
  .body{
    display: flex;
  }
  main{
    width: 70%;
    padding: 10px;
    margin: 10px;
    margin-left: 7%;
  }
  aside{
    width: 30%;
  }
  .profile{
    display:flex;
  }
  .images{
    width: 35%;
    border: 1px solid var(--grey-900);
  }
`
export default Profile