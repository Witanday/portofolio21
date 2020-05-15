import React, {Component} from 'react';
import serializeForm from 'form-serialize';
import SendEmailApi from './SendGridAPi'
import './contact.scss'


class Contact extends Component{
    state={
        message:{}
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        const values = serializeForm(e.target, {
            hash:true
        })
        if(values){
            const msg = {
                to: 'ir.witanday@gmail.com',
                from: values.email,
                subject: values.subject,
                text: 'and easy to do anywhere, even with Node.js',
                html: `<strong>${values.textarea}</strong>`,
              };
            console.log(values, msg, process.env.SENDGRID_API_KEY)
            SendEmailApi.send(msg)
        }
        
    }
    render(){
        return(
            <form className='contact-form' onSubmit={this.handleSubmit}>
            <div className='create-contact-details'>
            <h2>Get In Touch :</h2>
                <input type='text' name='name' placeholder='Your Email'/>
                <input type='text' name='subject' placeholder='Subject'/>
                <textarea 
                placeholder='Your Message'
                name='textarea'
                className='textarea'></textarea>
                <button>submit</button>
                 </div>
            </form>
        )
    }
}


export default Contact;