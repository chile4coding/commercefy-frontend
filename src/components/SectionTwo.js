import React from 'react'
import bg from '../assets/background.png'
import user_one from '../assets/undraw_online_payments_re_y8f2 1.png'
import user_two from '../assets/undraw_receipt_re_fre3 1.png'
import styled from 'styled-components'
const SectionTwo = () => {
  return (
    <>
      <Wrapper>
        <div className='bgimage'></div>
        <div className='text'>
          <h1>
            Focus on Growing Your <br />
            Business
          </h1>
          <h4>
            Our platform streamlines invoicing and ensures timely payments,
            empowering your business to thrive.
          </h4>
          <div className='users'>
            <div className='user'>
              <img src={user_two.src} alt='Commercefy' />
              <h3>Intuitive Invoice Creation</h3>
              <h5>
                Say goodbye to complexity and hello to streamlined invoicing
                that saves you time and ensures accuracy.
              </h5>
              <p>Learn more</p>
            </div>
            <div className='user'>
              <img src={user_one.src} alt='Commercefy' />
              <h3>Secure Online Payment Gateway</h3>
              <h5>
                Payments can be made directly from invoice and transfer of funds
                to banis easier than it seems.
              </h5>
              <p>Learn more</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  position: relative;
  .bgimage {
    position: relative;
    width: 100%;
    height: 800px;
    background-image: url(${bg.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .bgimage::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
  }
  h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
  }
  h4 {
    font-size: 22px;
    font-weight: 200;
    line-height: 28px;
    margin: 15px 0;
  }
  .users {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #252525;
  }
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: center;
    background-color: #fff;
    margin: 0 20px;
    width: 350px;
    height: 450px;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    margin: 15px 0;
  }
  h5 {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 0 0 10px 0;
  }
  p {
    border: 1px solid black;
    font-size: 14px;
    line-height: 20px;
    width: 140px;
    padding: 6px 0;
  }
  @media screen and (max-width: 1100px) {
    .users {
      flex-direction: column;
    }
    .user {
      margin: 20px 0;
    }
    .bgimage {
      height: 1300px;
    }
  }
  @media screen and (max-width: 650px) {
    h1 {
      font-size: 28px;
    }
    h4 {
      font-size: 19px;
    }
  }
  @media screen and (max-width: 370px) {
    .user {
      width: 300px;
    }
  }
`
export default SectionTwo
