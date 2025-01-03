import React from "react";
import UserInfo from "./Userinfo";
import Date from "./Date";
import './Comment.css'

const Comment = (props) => {

     
     
     
    return (
        <div className="Comment">
            <UserInfo author={props.author}/>
            <div className="comment-text">
               {props.text}
            </div>
            <Date date = {props.date}/>
        </div>
    )
}

export default Comment