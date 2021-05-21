import React from 'react'
import Main from './Main';   
import Body from './Body';
import Creact from './Creact'
import Myprofile from './Myprofile';
import { Switch,Route,Redirect, Router} from 'react-router-dom';
import Happy from './chats/Happy';
import Sad from './chats/Sad';
import Cool from './chats/Cool';
import ManeshBhai from './chats/ManeshBhai';
import ManojBhi from './chats/ManojBhi';
export default function App() {
  return (
    <div>
      
      <Switch>
   
   <Route exact path="/" component={Main}/>
   <Route exact path="/body" component={Body}/>
   <Route exact path="/creact" component={Creact}/>
   <Route exact path="/myprofile" component={Myprofile}/>
   
   <Route exact path="/happy" component={Happy}/>
   <Route exact path="/sad" component={Sad}/>
   <Route exact path="/cool" component={Cool}/>
   <Route exact path="/maneshbhai" component={ManeshBhai}/>
   <Route exact path="/manojbhi" component={ManojBhi}/>
   <Redirect exact to="/" />
   </Switch>
    </div>
  )
}
