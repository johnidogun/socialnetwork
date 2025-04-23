import React from 'react'
import "./home.css"
import Topbar from '../components/Topbar/Topbar.jsx'
import Leftbar from '../components/Leftbar/Leftbar.jsx'
import Feed from '../components/Feed/Feed.jsx'
import Rightbar from '../components/Rightbar/Rightbar.jsx'


export default function Home() {
  return (
    <div>
        <Topbar/>
        
        <div className="homeContainer">
        <Leftbar/>
        <Feed/>
        <Rightbar/>
        

        </div>
      
    This is home
    </div>
  )
}
