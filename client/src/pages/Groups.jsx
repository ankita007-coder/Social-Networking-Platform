import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AsideBox, Header } from '../components';
import axios from "axios";
import profile from '../assets/images/profile.png'

const url = "http://localhost:8000/api/v1/groups";
const Groups = () => {
  const [data,setData] = useState([]);
  const fetchData= async()=>{
    try {
      const response = await axios.get(url);
      const d = response.data;
      setData(d.groups);
      console.log(d.groups)
    } catch (error) {
      console.log(error)
    }
  }
  const handleClick= ()=>{

  }
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <Wrapper>
      <div className='header'>
        <Header/>
    </div>
    <div className='body'>
    <main>
      <h2>GROUPS</h2>
      <hr/>
      <div>
      {
        data.map((d)=>{
          return (
            <div className='box' key={d._id}>
            <div className='images'>
                <img src={profile} alt="profile" />
            </div>
            <div className='text'>
                <h4>{d.name}</h4>
                <p>{d.description}</p>
                <button onClick={handleClick} className='join'>Join Group</button>  
            </div>   
            
            </div>
          )
        })
      }
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

  .images img{
    margin: 3px;
    width:70%;
  }  
  h4{
    color: var(--primary-300);
  }
  .box{
    display: flex;
    width: 100%;
    border: 1px solid var(--grey-900);
    margin: 8px;
    border-radius: var(--borderRadius);
    padding: 10px;
  }
  .images{
    width: 25%;
  }
  .join{
    background-color: transparent;
    border-radius: var(--borderRadius);
    padding: 4px 8px
  }
`
export default Groups