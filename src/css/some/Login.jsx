import React from 'react'
import { Button,Icon, Input } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
export default function Login() {
    return (
        <div>
             <Input iconPosition='left' icon placeholder='Email or Phone no..' required>
      <input />
      <Icon name='user circle outline' />
    </Input>
    <br />
    <br />
    <Input iconPosition='left' placeholder='Password' type="password" required>
      <Icon name='key' />
      <input />
    </Input>
    
        </div>
    )
}
