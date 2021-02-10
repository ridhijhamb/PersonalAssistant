import React from 'react'
import './Board.css'

export default function Board() {
    return (
        <div className="outerContainer">
        
            <div className="leftContainer">
           
            <div  className="boardStar">
            <span>☆</span>
            </div>
            <div className="verticalLine">

            </div>
                <div className="boardNavbox">
                    Personal
                  
                </div>
                <div className="verticalLine">

                </div>
                <div  className="boardNavbox">
                    Private
                </div>
                <div className="verticalLine">

                </div>
                <div  className="boardNavbox">
                Invite
                </div>
            </div>
        <div className="rightContainer">
        <div  className="rightBox">
        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 4v1H4.995A1.994 1.994 0 003 6.994v12.012C3 20.106 3.893 21 4.995 21h14.01A1.994 1.994 0 0021 19.006V6.994A1.996 1.996 0 0019.005 5H18V4a1 1 0 00-2 0v1H8V4a1 1 0 00-2 0zm-.75 5.571v8.147c0 .555.444.996.993.996h11.515a.998.998 0 00.992-.996V9.571H5.25zM9 13v-2.001H7V13h2zm8-2.001V13h-2v-2.001h2zM11 13h2.001v-2.001H11V13zm-4 4v-2h2v2H7zm4 0h2.001v-2H11v2zm6-2v2h-2v-2h2z" fill="currentColor"></path></svg>
                    Calender
        
        </div>
        <div  className="rightBox">
       
                    Buffer
        
        </div>
        
        <div  className="rightBox">
        <div  className="boardDots">
            <span>...</span>
            </div>
                    Show Menu
        
        </div>
        </div> 
   </div> 
        
    )
}