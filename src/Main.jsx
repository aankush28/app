import React from 'react'
import './css/Main.css'
import Button from '@material-ui/core/Button';
import Login from './css/some/Login'
import { Link } from 'react-router-dom';
export default function Main() {
    return (
        <div>
          <div className="main_top">
              <div className="mai_head"> <img src="https://img2.pngio.com/filearchlinux-icon-crystal-64svg-wikimedia-commons-arch-linux-icon-png-1024_1024.png" alt="" srcset="" width="50" /> Ankush app</div>
              <div className="card">
                  <div>
                      <p className='p'>To use AnkushApp on your computer:</p>
                      <br/><br/>
                      <div className="login">
                     <Login/> <br/>
                    <Link to="/body" ><Button variant="contained" color="primary">
      Login us
    </Button></Link>
    <br/> <br/>
    <Link to="/creact">Create new Account & Forget password</Link>
    </div>
                  </div>
              </div>
          </div>
          
        </div>
    )
}
