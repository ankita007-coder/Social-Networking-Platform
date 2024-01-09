import React from 'react'
import styled from 'styled-components'
import Friends from './Friends'
import { Groups } from '.'

const AsideBox = () => {
  return (
    <>
    <Wrapper>
        <div className='title'>
            <h5>My Friends</h5>
        </div>
        <Friends/>
        <button>View All Friends</button>
    </Wrapper>
    <Wrapper>
        <div className='title'>
            <h5>Latest Groups</h5>
        </div>
        <Groups/>
        <button>View All Groups</button>
    </Wrapper>
    </>
  )
}


const Wrapper = styled.div`
    margin:10px;
    border: 1px solid var(--grey-900);
    border-radius: var(--borderRadius);
    .title{
        background-color: var(--primary-500);
        padding:5px;
    }
    h5{
        color: var(--white);
        padding: 5px;
        text-align: left;
    }
    button{
        background-color: var(--primary-400);
        color:white;
        border: none;
        border-radius: var(--borderRadius);
        padding: 5px 10px;
        margin: 8px;
    }

`
export default AsideBox