import React from 'react';
import {Grid} from 'semantic-ui-react';
import './home.style.scss';

import CustomButton from '../../components/button/button.component'
import ParticleBg from '../../components/particles/particles.component'

const HomePage =({simpleBtn})=> {

    return (
        <Grid className='home-page'>
        <ParticleBg/>
        <Grid.Column>
        <div className='text-box'>
                <h2 className='title'>I can help you build <br/>your next full stack applications</h2>
                <p className='text'>I'm Witanday Kyanga : Web Designer <br/>
                & Software Developer based in Boston, Massachussets,USA.
                <br/>Highly experienced in designing and developing mobile friendly web-applications.
                </p>
                
                <CustomButton to='/' className={`${simpleBtn}`}>Learn more here <span className='arrow'>&#8674;</span></CustomButton>
          
                </div>
        </Grid.Column>
        </Grid>

    )
}


export default HomePage;
