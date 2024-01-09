import React from 'react'
import profile from '../assets/images/profile.png';
import styled from 'styled-components';


const Friends = () => {
    
  return (
    <Wrapper>
      <div className='friends'>
        <div className='box'>
            <div className='image'>
                <img src={profile} alt="profile" />
            </div>
            <div className='text'>
                <h4>Sample Group 1</h4>
                <p>This is description for Group 1</p>
            </div>     
        </div>
        <div className='box'>
            <div className='image'>
                <img src={profile} alt="profile" />
            </div>
            <div className='text'>
                <h4>Sample Group 1</h4>
            </div>     
        </div>
        <div className='box'>
            <div className='image'>
                <img src={profile} alt="profile" />
            </div>
            <div className='text'>
                <h4>Sample Group 1</h4>
            </div>     
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  .friends{
    margin: 10px;
    padding: 10px;
  }
  img{
    margin: 3px;
    width:90%;
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
  }
  .image{
    width: 25%;
  }

`
export default Friends