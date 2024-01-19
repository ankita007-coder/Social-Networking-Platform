import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AsideBox, Header } from '../components'
import axios from 'axios'
import { useAuth } from '../utils/AuthContext'
import profile from "../assets/images/profile.png";
import { MdPersonAddAlt1 } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";
const Friends = () => {

  const [nonFriends,setNonFriends] = useState([]);
  const {userDetails} = useAuth();
  const displayMembers = async()=>{
    const response = await axios.get('http://localhost:8000/api/v1/users')
    //console.log(response.data)
    const allMembers = response.data;
   
   // console.log(friends)
    if(!userDetails.friends){
      setNonFriends(allMembers)
    }
    else{
      const friends = userDetails.friends.accepted;
      const nonFriends = allMembers.filter((member) => {
        return !friends.some((friend) => friend._id === member._id);
      });
      setNonFriends(nonFriends);
    }
    console.log(nonFriends)
    // const nonMember = friends.filter(()=>{

    // })
  }
  useEffect(()=>{
    displayMembers();
  },[userDetails.friends]);

  return (
    <Wrapper>
      <div className='header'>
        <Header/>
    </div>
    <div className='body'>
    <main>
      {
        nonFriends.map((nonFriend,index)=>{
          const {photos, fullName} = nonFriend;
          let url = '';
          if (photos.url){
            url = photos.url;
          }
          else{
            url = 'https://www.flaticon.com/free-icon/profile_7542296?term=admin&page=1&position=16&origin=search&related_id=7542296'
          }
          //console.log(url)
          return <div key={index} className='members'>
                  <div className='profile-img'>
                    <img src={profile} alt={fullName}/>
                    <h4>{fullName}</h4>
                  </div>
                 <div className='buttons'>
                  <button style={{ backgroundColor:'green'}}><MdPersonAddAlt1 /> Add Friend</button>
                  <button style={{ backgroundColor:'transparent'}}><LuMessagesSquare /> Send Message</button>
                  <button style={{ backgroundColor:'var(--primary-300)'}}><FaEdit /> View Profile</button>
                 </div>
                </div>
        })
      }
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
  .members{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
   
    padding: 10px
  }
  .profile-img{
    width: 23%;
    img{
      width: 100%;
      border: 1px solid var(--grey-900);
      padding: 10px;
    }
    h4{
      text-align:center;
      margin-top:3px;
    }
  }
  .buttons{
    width: 75%;
    margin: 10px;
    button{
      
      padding: 10px;
      margin: 10px;
      border: 1px solid var(--grey-900);
      color: white;
    
    &:nth-child(2){
      color: black;
    }
    }
  }
    @media only screen and (max-width: 992px){
      aside{
        display:none;
      }
      main{
        width: 100%;
      }
    }
    .buttons button{
      width: 145px;
    }

`
export default Friends