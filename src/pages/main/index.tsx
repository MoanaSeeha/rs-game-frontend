import React, { useState, MouseEvent} from "react";
import { useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import {
  selectScale,
  selectPosition,
  setPosition,
  setScale
} from './mainReducer';
import { GameButton } from "../../components/Input";

export interface IPosition { x: number; y: number; }

export default function Main() {

  const scale = useSelector(selectScale);
  const position = useSelector(selectPosition);

  const dispatch = useDispatch();

  const[clicked,setClicked] = useState(false);
  // const[scale,setScale] = useState(0.4);
  // const[position,setPosition] = useState<IPosition>({
  //   x: (window.screen.width-1500)/2,
  //   y: 0,
  // });
  const[clickedPoint, setClickedPoint] = useState<IPosition>({x:-10000, y: -10000})
  
  const navigate = useNavigate();

  const divRef = React.useRef<HTMLDivElement>(null);

  const getMouseDirection = (e: MouseEvent<HTMLDivElement>) => {
    //deal with the horizontal case
    if(clicked) {
      console.log('x:',e.pageX, 'y:', e.pageY);
      let xDirection = 0;
      let yDirection = 0;
      if(clickedPoint.x>-10000 && clickedPoint.y>-10000) {
        xDirection =  (e.pageX - clickedPoint.x) * Number(scale);
        if((position.x > 0 && xDirection > 0) || (position.x<-300 && xDirection < 0)) xDirection = 0;
        yDirection =  (e.pageY - clickedPoint.y) * Number(scale);
        if((position.y>500 && yDirection > 0) || (position.y<-500 && yDirection < 0)) yDirection = 0;
      }
      // else {
        setClickedPoint({
          x: e.pageX,
          y: e.pageY
        })
      // }
      dispatch(setPosition({
        x: position.x + xDirection,
        y: position.y + yDirection,
      }));
    }
  }

  const getWheelEvent = (e:React.WheelEvent<HTMLDivElement>) => {
    if(scale * 1500 < window.screen.width)
    dispatch(setPosition({
      x: (window.screen.width-1500)/2,
      y: 0,
    }));
    console.log((scale)*1214, window.screen.height);
    if(e.deltaY<0 && scale < 2) dispatch(setScale(scale + 0.1));
    else if(e.deltaY>0 && (scale)*1214 > window.screen.height) dispatch(setScale(scale - 0.1));
  }

  return (
    <div>
      <div className="castle-overlay overlay"
        onMouseDown={(e) => {
          setClicked(true);
        }}
        onMouseMove={getMouseDirection}
        onMouseUp={() => {
          setClicked(false);
          console.log('width:', window.screen.width);
          if(scale * 1500 < window.screen.width)
          dispatch(setPosition({
            x: (window.screen.width-1500)/2,
            y: 0,
          }))
          setClickedPoint({
            x: -10000,
            y: -10000
          })
        }}
        onMouseLeave={() => {
          setClicked(false);
          console.log('width:', window.screen.width);
          if(scale * 1500 < window.screen.width)
          dispatch(setPosition({
            x: (window.screen.width-1500)/2,
            y: 0,
          }))
          setClickedPoint({
            x: -10000,
            y: -10000
          })
        }}
        onWheel={getWheelEvent}
      >
        <div 
          className="castle-bg"
          style={{transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${scale})`}} 
          ref={divRef}
        >
          <div className="land-auction-btn click-cursor">
            <GameButton title="Stake" onClick={() => navigate("/stake")}/>
          </div>
          <div className="quest-btn click-cursor">
           <GameButton title="Quest" onClick={() => navigate("/quest")}/>
          </div>
          <div className="market-btn click-cursor">
           <GameButton title="MarketPlace" onClick={() => navigate("/market")}/>
          </div>
          <div className="summon-btn click-cursor">
           <GameButton title="Summon" onClick={() => navigate("/summon")}/>
          </div>
          <div className="lp-btn click-cursor">
           <GameButton title="LP" onClick={() => navigate("/lp")}/>
          </div>
        </div>
      </div>
    </div>
  )
}