import React, {useRef, useState, MouseEvent} from "react";



// var bodyElement = document.querySelector("body");
// bodyElement.addEventListener("mousemove", getMouseDirection, false);

 


export default function Main() {

  interface IPosition { x: number; y: number; }

  const[clicked,setClicked] = useState(false);
  const[scale,setScale] = useState(2);
  const[position,setPosition] = useState<IPosition>({ x: 0, y: 0 });

  const divRef = React.useRef<HTMLDivElement>(null);
   
    

  const getMouseDirection = (e: MouseEvent<HTMLDivElement>) => {
    //deal with the horizontal case
    console.log(clicked);
    if(clicked) {
      let xDirection = 0;
      let yDirection = 0;
      if (position.x > e.pageX) {
        xDirection = -3;
      } else if (position.x < e.pageX) {
        xDirection = 3;
      }
  
      //deal with the vertical case
      if (position.y > e.pageY) {
          yDirection = -3;
      }else if (position.y < e.pageY) {
        yDirection = 3;
      }
  
      setPosition({
        x: position.x + xDirection,
        y: position.y + yDirection,
      })

  
      console.log(e.pageX + " " + e.pageY);
    }
    
}

  return (
    <div className="castle-overlay "
      onMouseDown={(e) => {
        setClicked(true);
        setPosition({
          x: e.pageX,
          y: e.pageY,
        })
      }}
      onMouseMove={getMouseDirection}
      onMouseUp={() => setClicked(false)}
    >
      <div 
        className="castle-bg"
        style={{transform: `translate3d(${position.x}px, ${position.y}px, 0px)`, scale: 1}} 
        ref={divRef}

      ></div>
    </div>
  )
}