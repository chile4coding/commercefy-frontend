import React from 'react'
import Header from '../header'
import ActiveLink from './ActiveLink'
import LoginHeader from '../LoginHeader';
export default function Applayout({children}) {
  return (
    <main className='  flex flex-col'>
    <div>
        <Header/>
        {/* <LoginHeader/> */}

    </div >
        <div className=''>
        {children}

        </div>
    </main>

 
  );
}
