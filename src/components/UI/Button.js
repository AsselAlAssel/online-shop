import React from 'react';
import classes from "./Button.module.scss"
 const Button =(props)=>{
     const clickHandler=()=>{
         props.onClick(props.children);
     }
     let className=`${classes.button} ${props.className}`
     return <button className={className} onClick={clickHandler} >{props.children}</button>

 }
 export default Button