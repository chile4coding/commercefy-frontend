import React from 'react'
import styled from 'styled-components'
import invoice from '../assets/For k 1.png'

const SectionThree = () => {
  return (
    <>
      <Wrapper>
        <div className='user-invoice'>
          <h1>
            Create Beautiful Invoices In <br />
            Under 60 seconds
          </h1>
          <img src={invoice.src} alt='Commercefy' />
          <p>Learn more</p>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .user-invoice {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
  }
  h1 {
    margin: 30px 0;
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
    color: #252525;
  }
  p {
    border: 1px solid black;
    font-size: 14px;
    line-height: 20px;
    width: 140px;
    padding: 6px 0;
    text-align: center;
    margin: 20px 0;
  }
  img {
    width: 40%;
  }
  @media screen and (max-width: 900px) {
    h1 {
      font-size: 27px;
    }
    img {
      width: 80%;
    }
    br {
      display: none;
    }
  }
`
export default SectionThree
