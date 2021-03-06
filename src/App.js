import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.scss'
import Header from './components/header/header-component'
import Footer  from './components/footer/footer.component'
import HomePage from './pages/home/home.component'
import ContactPage from './pages/contact/contact'
import AboutPage from './pages/about/about';

import ProjectPage from './pages/projects/projects.component';
class App extends Component{


  render(){

    return(
      <div  className='main-app'>
    
      <Header  />
     
        <div className='main-container'>
        
        
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/projects' component={ProjectPage} />
          <Route  path='/contact' component={ContactPage} />
          <Route  path='/about' component={AboutPage} />
      
        </Switch>

      <Footer />
        </div>
     
      
      </div>
    )

  }
}


export default App;
