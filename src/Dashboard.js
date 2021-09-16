import React from 'react';
import { Conditionalbtlike } from './Conditionalbtlike';
import { Products } from './Products';
export function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className = "prj1">
        <h6>first project : 
          like,dislike, show more show less text, color change on condition- like lesser than dislike
        </h6>
        <Conditionalbtlike/>
      </div>
      <hr/>

      <div className = "prj2">
       
      <Products/>
      </div>
    
     <hr/>
     
    </div>
  );
}

