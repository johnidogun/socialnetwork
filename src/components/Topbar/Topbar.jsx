import React from 'react'
import './topbar.css'
import { Search, Person, Chat, Notifications, } from '@material-ui/icons'






export default function Topbar() {
  return (
    <div className='Navbar'>
        <div className='LeftBar'>
            <span className='Logo'>I socials</span>
        
        </div>
        <div className='CenterBar'>
            <div className='SearchBar'>
            <Search className='searchBarIcon'/>
            <input placeholder='Search for Friends Post or Any Videos'
             className='searchbarinput' />
         </div>
        </div>
        <div className='TopRightBar'>
            <div className="toprightbarlinks">
            <span className="toprightbarlink">Home</span>
            <span className="toprightbarlink">TimeLine</span>
            </div>

            <div className="topBarIcons">
            <div className="topBarIconItems">
                <Person/>
                <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarIconItems">
                <Notifications/>
                <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarIconItems">
                <Chat/>
                <span className="topBarIconBadge">1</span>
            </div>


            {/* <div className="topBarIconItems">
                <Person/>
                <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarIconItems">
                <Person/>
                <span className="topBarIconBadge">1</span>
            </div> */}


        
          </div>
          <img src='/public/assets/person/handsome-young-man-with-arms-crossed-white-background.jpg' width={40} height={40} alt='' className='topbarImg'/>
        </div>
      
        </div>
       
  )
}
