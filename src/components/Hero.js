import React from 'react'
import styled from 'styled-components'
import bg from '../assets/man.png'
import ActiveLink from './header/layout/ActiveLink'

const Hero = () => {
  return (
    <>
      <Wrapper>
        <div>
          <div className='bg-image'></div>
          <div className='content'>
            <div className='content-heading'>
              <h1>
                Elevate your business with <br /> our streamlined platform.
              </h1>
              <p>Effortless Invoicing and Seamless Payments</p>
            </div>
            <ActiveLink href='/signup'>Start Exploring</ActiveLink>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .bg-image {
    position: relative;
    width: 100%;
    height: 600px;
    background-image: url(${bg.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.3;
  }
  .bg-image::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.01);
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .content-heading {
    padding: 20px;
    margin-bottom: 80px;
  }
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 45px;
    color: #252525;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    color: #252525;
  }
  .link {
    padding: 10px 0;
    background-color: #fff;
    width: 200px;
    font-size: 17px;
    color: #252525;
    margin: 0 auto;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  @media screen and (max-width: 700px) {
    .content {
      width: 80%;
    }
    h1 {
      font-size: 35px;
      line-height: 45px;
    }
    br {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
  }
`
export default Hero
