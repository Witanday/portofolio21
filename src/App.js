import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.scss'
import Header from './components/header/header-component'
import Footer  from './components/footer/footer.component'
import HomePage from './pages/home/home.component'
import ParticlesBg  from './components/particles/particles.component'
class App extends Component{


  render(){

    return(
      <div  className='main-app'>
      <ParticlesBg className='particles-bg' />
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
        
        
          </Switch>

        <Footer />
      
      </div>
    )

  }
}


export default App;
