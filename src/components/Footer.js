import { FaInstagram ,FaReddit,FaFacebookSquare,FaTwitter} from "react-icons/fa";
import React from 'react'

function Footer() {
    return (
        <div>
           <h3>@copywrite</h3>
            
          <FaInstagram color=' dark pink' size='4rem' />

            
            <FaFacebookSquare color='blue' size='4rem'/>
            
            <FaReddit color='red' size='4rem'/>
            
            <FaTwitter color='blue' size='4rem'/>
            
        </div>
        
    )
}

export default Footer
