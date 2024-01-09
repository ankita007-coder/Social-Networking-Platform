import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import AsideBox from './AsideBox'

const Layout = () => {
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
export default Layout