import React from 'react'
import ActiveLink from './header/layout/ActiveLink'
import styled from 'styled-components'

const SectionFour = () => {
  return (
    <>
      <Wrapper>
        <div className='works'>
          <h1>How It Works</h1>
          <div className='how-it-works'>
            <div className='steps one'>
              <h3>Step 1</h3>
              <h2>Create Your Invoice</h2>
              <p>
                Simply input your details, and with just a few clicks, generate
                a professional invoice that reflects your brand.
              </p>
              <p className='start'>Start Now</p>{' '}
            </div>
            <div className='steps two'>
              <h3>Step 2</h3>
              <h2>Create Your Invoice</h2>
              <p>
                Simply input your details, and with just a few clicks, generate
                a professional invoice that reflects your brand.
              </p>
              <p className='start'>Start Now</p>
            </div>
            <div className='steps three'>
              <h3>Step 3</h3>
              <h2>Create Your Invoice</h2>
              <p>
                Simply input your details, and with just a few clicks, generate
                a professional invoice that reflects your brand.
              </p>
              <p className='start'>Start Now</p>
            </div>
          </div>
          <h4>Start Now</h4>
          <div className='get-started'>
            <h1>Get started for free now!</h1>
            <ActiveLink href='/signup'>
              Register
            </ActiveLink>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .steps,
  .works {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
  }
  .how-it-works {
    display: flex;
  }
  .steps {
    width: 350px;
    text-align: center;
    margin: 20px;
    padding: 20px 30px;
    border-radius: 15px;
    color: #252525;
  }
  .one {
    background-color: #eaddff;
  }
  .two {
    background-color: #ffecf1;
  }
  .three {
    background-color: #f7f2fa;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    width: 100%;
  }
  .start {
    margin: 20px;
    border: 1px solid black;
    width: 130px;
    padding: 7px 0;
  }
  h3 {
    font-size: 20px;
    line-height: 28px;
  }
  h2 {
    font-size: 20px;
    line-height: 28px;
    margin: 7px 0;
  }
  h4 {
    border: 0.5px solid #252525;
    background: #f3f3f3;
    display: flex;
    width: 200px;
    height: 52px;
    padding: 8px;
    margin: 30px 0;
    justify-content: center;
    align-items: center;
  }
  .get-started {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 90px 0;
    width: 100%;
    background: rgba(255, 216, 228, 0.3);
  }
  .link {
    display: flex;
    width: 250px;
    height: 52px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: #4f378b;
    text-decoration: none;
    cursor: pointer;
    margin-top: 45px;
    color: #fff;
    font-size: 18px;
  }
  @media screen and (max-width: 1200px) {
    .how-it-works {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 800px) {
    h1 {
      font-size: 27px;
      line-height: 33px;
    }
    h5 {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 400px) {
    .steps {
      width: 300px;
      margin: 20px 0;
    }
    .start {
      margin: 20px 0;
    }
  }
`
export default SectionFour
