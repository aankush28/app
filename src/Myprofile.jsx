import React from 'react'

import './body.css'

import { List, Image, Button, Icon ,Card} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
export default function Myprofile() {
    return (
        <div>
            <div class="sidenav">
<List horizontal>
    <List.Item><Link to="/body">
      <Image width='50' className="ing" src='https://img2.pngio.com/filearchlinux-icon-crystal-64svg-wikimedia-commons-arch-linux-icon-png-1024_1024.png' />
      
      <List.Content verticalAlign='top'> <Button inverted color='teal' icon labelPosition='right'>
      <Icon name='left arrow' /> My Chats
     
    </Button></List.Content>
    </Link></List.Item>
   
    <List.Item>
      <Link to="/">
      <List.Content verticalAlign='bottom'><Button color='twitter'>
      <Icon name='sign out alternate' /> LogOut
    </Button></List.Content></Link>
    </List.Item>
  </List>
    <br/>
    <Card >
    <img width="90%"src='https://img2.pngio.com/filearchlinux-icon-crystal-64svg-wikimedia-commons-arch-linux-icon-png-1024_1024.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Ankush</Card.Header>
      <Card.Meta>Joined in 2021</Card.Meta>
      <Card.Description>
      Owner of AnkushApp.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
       <Link to="/body"> <Icon name='user' />
        5 Friends</Link>
      </a>
    </Card.Content>
  </Card>
  
</div>

<div class="main">
<img width="50%" src="https://img2.pngio.com/filearchlinux-icon-crystal-64svg-wikimedia-commons-arch-linux-icon-png-1024_1024.png" alt="" srcset=""/>
<h1>A for AnkushApp</h1>
<p>open your chat with ankushapp</p>
</div>
        </div>
    )
}
