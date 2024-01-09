import React from 'react'
import styled from 'styled-components'
import { AsideBox, Header } from '../components'

const Groups = () => {
  return (
    <Wrapper>
      <div className='header'>
        <Header/>
    </div>
    <div className='body'>
    <main>

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
  }
  aside{
    width: 30%;
  }
`
export default Groups