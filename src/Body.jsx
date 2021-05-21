import React from 'react'
import './body.css'
import { List, Image, Button, Icon ,Popup,Label, Menu ,Message} from 'semantic-ui-react'
import { Link,NavLink } from 'react-router-dom';

export default function Body() {
    return (
        <div>
           

<div class="sidenav">
<List horizontal>
    <List.Item><Link to="/myprofile">
      <Image width='50' className="ing" src='https://img2.pngio.com/filearchlinux-icon-crystal-64svg-wikimedia-commons-arch-linux-icon-png-1024_1024.png' />
      <List.Content verticalAlign='top'> <span className="profile1st"><h3> My Profile</h3></span></List.Content>
    </Link></List.Item> 
    <Popup
    content={
      <>
         <Message icon>
    <Icon name='circle notched' loading />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      We are open your massage.
      
    </Message.Content>
  </Message>
  
      </>
    }
    on='click'
    positionFixed
    trigger={<Button animated='vertical'> 
    <Button.Content hidden>info <span class="badge bg-secondary badge bg-info text-dark">9</span></Button.Content>
    <Button.Content visible> <span class="badge bg-secondary badge bg-success">9</span>
       <Icon name='cloudversify' /> </Button.Content>
    </Button>
    }
  />
    <List.Item>
      <Link to="/">
      <List.Content verticalAlign='bottom'><Button color='twitter'>
      <Icon name='sign out alternate' /> LogOut
    </Button></List.Content></Link>
    </List.Item>
  </List>
    
<List>
  
    <hr/>
    <List.Item className="ok">
      <Image width='50' src='data:image/jpeg;base64,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' />
      <List.Content ><NavLink activeClassName="body_Active" to="/happy">
        <List.Header as='a'>Happy <span className="span"> just now.</span></List.Header>
        <List.Description>
         
          <a>
            <b>we make happy life</b>
          </a>{' '}
         
        </List.Description>
     </NavLink> </List.Content>
    </List.Item><hr/>
    <List.Item className="ok">
      <Image width='50' src='https://www.freepngimg.com/download/icon/1000525-crying-sad-emoji-icon-file-hd.png' />
      <List.Content><NavLink activeClassName="body_Active" to="/sad">
        <List.Header as='a'>Sad <span className="span">10:00 AM</span> </List.Header>
        <List.Description>
         
          <a>
            <b>i sad bro...</b>
          </a>{' '}
          
        </List.Description>
     </NavLink> </List.Content>
    </List.Item><hr/>
    <List.Item className="ok">
      <Image width='50' src='https://i.pinimg.com/originals/33/57/f3/3357f32aea8abce1b16fa1cb0842b9d3.png' />
      <List.Content><NavLink activeClassName="body_Active" to="/cool">
        <List.Header as='a'>Cool <span className="span"> yesterday.</span></List.Header>
        <List.Description>
          
          <a>
            <b>cool life!</b>
          </a>{' '}
          
          
        </List.Description>
    </NavLink> </List.Content>
    </List.Item><hr/>
    <List.Item className="ok">
      <Image width='50' src='https://image.emojipng.com/446/8715446.jpg' />
      <List.Content><NavLink activeClassName="body_Active" to="/maneshbhai">
        <List.Header as='a'>Manesh Bhai <span className="span"> 3 days ago. </span></List.Header>
        <List.Description>
          
          <a>
            <b>hi.....................................................</b>
          </a>{' '}
         
        </List.Description>
    </NavLink>  </List.Content>
    </List.Item><hr/>
    <List.Item className="ok">
      <Image width='50' src='https://i.pinimg.com/236x/d8/66/38/d866382f7a19484059822fcc1f0646c5--emoji-people-emoji-faces.jpg' />
      <List.Content><NavLink activeClassName="body_Active" to="/manojbhi">
        <List.Header as='a'>Manoj Bhai <span className="span"> 5:00 pm</span></List.Header>
        <List.Description> <a>
            <b>hlw..........................................</b>
          </a>{' '}
         </List.Description>
    </NavLink>  </List.Content>
    </List.Item><hr/>
  </List>
  
</div>

<div class="main">
<img width="50%" src="https://img2.pngio.com/filearchlinux-icon-crystal-64svg-wikimedia-commons-arch-linux-icon-png-1024_1024.png" alt="" srcset=""/>
<h1>A for AnkushApp</h1>
<p>open your chat with ankushapp</p>
</div>
        </div>
    )
}
