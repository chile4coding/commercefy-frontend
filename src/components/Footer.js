import React from 'react'
import styled from 'styled-components'
import facebook from '../assets/Component 4.png'
import instagram from '../assets/Component 5 (1).png'
import twitter from '../assets/Component 6.png'
import linkedin from '../assets/Component 7.png'

const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer>
          <div className='footer'>
            <div className='links'>
              <ul>
                <li>HELP</li>
                <li>My Account</li>
                <li>FAQs</li>
                <li>Returns</li>
              </ul>
              <ul>
                <li className='empty'>
                  <br />
                </li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
            <div className='socials'>
              <img src={facebook.src} alt='Commercefy' />
              <img src={instagram.src} alt='Commercefy' />
              <img src={twitter.src} alt='Commercefy' />
              <img src={linkedin.src} alt='Commercefy' />
            </div>
            <h3>2023 COMMERCEFY - ALL RIGHTS RESERVED</h3>
          </div>
        </footer>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  footer {
    background-color: #000;
    width: 100%;
    padding: 50px 30px;
  }
  .links {
    display: flex;
    justify-content: space-between;
  }
  li {
    list-style: none;
    margin: 15px 0;
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  ul {
    padding: 0 60px;
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
  }
  img {
    width: 12%;
  }
  h3 {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.06px;
    text-align: center;
  }
  @media screen and (max-width: 700px) {
    .links {
      flex-direction: column;
    }
    ul {
      padding: 0;
    }
    .empty {
      display: none;
    }
  }
`
export default Footer
