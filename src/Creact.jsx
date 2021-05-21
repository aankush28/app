import React from 'react'
import './css/Main.css'
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
export default function Creact() {
    return (
        <div>
            
        <div>
          <div className="main_top">
              <div className="mai_head"> <img src="https://img2.pngio.com/filearchlinux-icon-crystal-64svg-wikimedia-commons-arch-linux-icon-png-1024_1024.png" alt="" srcset="" width="50" /> Ankush app</div>
              <div className="card">
                  <div>
                      <p className='p'>To use AnkushApp on your computer:</p>
                      <br/><br/>
                      <div className="login">
                     
                    <Link to="/" ><Button variant="contained" color="primary">
      Login us
    </Button></Link>
    <br/> <br/>
    <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">First name</label>
    <input type="text" class="form-control"  required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Last name</label>
    <input type="text" class="form-control"  required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltipUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
      <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
      <div class="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
    </div>
  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">Email ID & Phone no.....</label>
    <input type="text" class="form-control" id="validationTooltip03" required/>
    <div class="invalid-tooltip">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">ctiy</label>
    <select class="form-select" id="validationTooltip04" required>
      <option selected disabled value="">Choose...</option>
      <option>new delhi</option>
    </select>
    <div class="invalid-tooltip">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Password</label>
    <input type="password" class="form-control" id="validationTooltip05" required/>
    <div class="invalid-tooltip">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
    </div>
                  </div>
              </div>
          </div>
          
        </div>

        </div>
    )
}
