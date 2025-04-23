import React from 'react'
import './Leftbar.css'
import {RssFeed, Message,Group, Bookmark, SchoolOutlined, Event, QuestionAnswer,PlayCircleFilledOutlined,WorkOutline, HelpOutline, School} from "@material-ui/icons"

export default function Leftbar() {
  return (
    <div className='divcontainer'>
      <div className="sidebarWrapper">
          <ul className="sidebarList">
             <li className="sidebarListItem">
              <RssFeed className='sidebarIcon'/>
              <span className="sidebarListItemText">
                Feed
              </span>
                        
            </li>
            <li className="sidebarListItem">
              <Message className='sidebarIcon'/>
              <span className="sidebarListItemText">
                CHAT
              </span>
                        
            </li>
            <li className="sidebarListItem">
              <PlayCircleFilledOutlined className='sidebarIcon'/>
              <span className="sidebarListItemText">
                Videos
              </span>
                        
            </li>
            <li className="sidebarListItem">
              <Group className='sidebarIcon'/>
              <span className="sidebarListItemText">
                GroupS
              </span>
                        
            </li>
            <li className="sidebarListItem">
              <Bookmark className='sidebarIcon'/>
              <span className="sidebarListItemText">
                Bookmarks
              </span>
                        
            </li>
            <li className="sidebarListItem">
              <HelpOutline className='sidebarIcon'/>
              <span className="sidebarListItemText">
                Questions
              </span>
                        
            </li>
            <li className="sidebarListItem">
              <WorkOutline className='sidebarIcon'/>
              <span className="sidebarListItemText">
                Jobs
              </span>
                        
            </li>
            <li className="sidebarListItem">
              <Event className='sidebarIcon'/>
              <span className="sidebarListItemText">
                Event
              </span>
                        
            </li>
            <li className="sidebarListItem">
              <School className='sidebarIcon'/>
              <span className="sidebarListItemText">
                School
              </span>                        
            </li>
           </ul>
           

      </div>
      <button className="leftbarbutton">Show More</button>
           <hr className="sidebarHr" />
           <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                   <img className="sidebarFriendImg" src='/public/assets/person/vertical-shot-happy-dark-skinned-female-with-curly-hair.jpg' alt=''/>
                   <span className="sidebarFriendName">
                    John Doe
                   </span>
                </li>
           </ul>
           
            </div>
  )
}
