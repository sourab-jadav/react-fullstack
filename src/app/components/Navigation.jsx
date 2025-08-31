import { connect } from "react-redux"
import { Link } from "react-router-dom"
import React from "react"
 const Navigation = () => (
   <div>
     {/* Link is like an a tag in html instead of href we have 'to' attribute here */}
     <Link to="/dashboard">
       <h1>My application</h1>
     </Link>
   </div>
 );


export const ConnectedNavigation=connect(state=>state)(Navigation)