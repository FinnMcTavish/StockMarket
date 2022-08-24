import React from 'react'
import './RegForm.css'
// import picus from '../'
function RegForm() {
  return (
    <div>
        <center>
            <div className='regform'>
                <h2>Registration</h2>
                <div className='inp'>
                    <div className='inp2'>
                        <input type="text" placeholder='Username'></input>
                        {/* <img src='{picus}'></img> */}

                    </div>
                    
                    <input type="text" placeholder='Password'></input>
                </div>
                
                <div>
                    <button className='but-sub'>Submit</button>
                </div>

                
                
            

            </div>
        </center>
        
    </div>
  )
}

export default RegForm