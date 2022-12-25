import React from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Join = () => {

    const form = useRef()
    const [ sent, setSent ] = useState( false )
    const [email, setEmail] = useState('')
    
    useEffect( () => {

        if ( sent ) {
            setTimeout(() => setSent(false), 3000)
        }
}, [sent])

    const sendEmail = ( e ) => {
        e.preventDefault();
        

        if (email === '') return
        emailjs.sendForm( 'service_fq6rtvc', 'template_rwviaxc', form.current, 'lTFXAKZZGut8k4EVE' )
            .then( ( result ) => {
                setSent( true )
                
            }, ( error ) => {
                console.log( error.text );
                setSent( false )
            } );
        setEmail('')
        
    }
  return (
      <div id='join' className='join'>
          <div className="join-l">
              <div>
                  <span className='outline-text'>Ready to</span>
                  <span>level up</span>
              </div>
              <div>
                  <span>your body</span>
                  <span className='outline-text'>with us</span>
              </div>
              <hr />
          </div>
          <div className="join-r">
              
              { sent ? <span className='thank-you'>Thank you for Joining us!</span> :
                  <form ref={ form } className="email-container" onSubmit={ sendEmail }>
                  
                      <input type="email" name='user_email' placeholder='Enter your Email Address' required value={email} onChange={(e) => setEmail(e.target.value)} />
                      <button className='btn btn-join'>Join now</button>
                 
                  </form>
              }
          </div>
    </div>
  )
}

export default Join