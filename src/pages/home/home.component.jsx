import React from 'react'
import './home.style.scss'

import CustomButton from '../../components/button/button.component'


const HomePage =()=> {
    return (
        <div className='home-page'>
           
            <div className='homepage-text'>
            <div className='logo-box'>
               
            </div>
            <div className='text-box'>
                <h2 className='title'>I can help you build <br/>your next full stack applications</h2>
                <p className='text'>'m Web Designer <br/>
                & Software Developer based in Boston, Massachussets,USA.
                <br/>Highly experienced in designing and developing mobile friendly web-applications.
                </p>

               
                </div>
            </div>


        </div>
    )
}


export default HomePage;