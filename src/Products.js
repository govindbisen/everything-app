import React from 'react';
import './style.css';
export function Products() {
 const mobile_list = 
 [
      {id:1,name:"mobile1",brand:"brand1",image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80"},
     {id:2,name:"mobile2",brand:"brand2",image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80"},
     {id:3,name:"mobile3",brand:"brand3",image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80"},
     {id:4,name:"mobile4",brand:"brand4",image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80"},
     {id:5,name:"mobile5",brand:"brand5",image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80"},
     {id:6,name:"mobile6",brand:"brand6",image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80"},
   ]
 const mobiles = mobile_list.map(mobile=> <Welcome name={mobile.name} brand ={mobile.brand} image = {mobile.image}/>)
  return (
    <div className = "mobiles">
     {mobiles}
    </div>
  );
}

function Welcome({name,brand,image}) {
  return (<div className = "mobile-card">
 
  <h4> {name}</h4>
  <img src = {image} alt = {name} width ="200 px" height = "200 px"></img>
  <h6> {brand} </h6>
  
  </div>);
}












