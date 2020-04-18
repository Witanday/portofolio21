import React from 'react'

const Footer = ()=>{


    const getYear = ()=>{
        const year = new Date().getFullYear()
        return year
    }
    return(
        <footer class="bg-light py-2 fixed-bottom">
        <div class="container">
          <div class="small text-center text-muted">`Copyright &copy;  {getYear()}- Witanday.io`</div>
        </div>
      </footer>
    )
}
           

export default Footer