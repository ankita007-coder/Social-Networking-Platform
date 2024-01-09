import styled from 'styled-components'

const Wrapper= styled.div`
  span{
    color: red;
    font-weight: bold;
  }
  .form{
    display:flex;
    flex-direction:column;
    justify-content: center;
    border: 3px solid  var(--primary-300);
  }
  .form div{
    margin: 5px;
  }
  input{
    width: 100%;
    border: 1px solid  var(--primary-300);
  }
  input[type="submit"]{
    background-color:var(--primary-300);
    color: white;
    padding:8px;
    transition: ease-in-out 0.5s;
  }
  input[type="submit"]:hover{
    background-color:white;
    color: var(--primary-300);
    box-shadow: var(--shadow-3);
  }
  p{
    text-align:center;
  }
  .link{
    text-decoration:none;
    color: white
  }
  .link:hover{
    cursor:pointer;
  }
`

export default Wrapper;