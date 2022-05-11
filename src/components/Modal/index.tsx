import React, {FC} from "react";
import { useNavigate, useLocation } from "react-router-dom";

export interface IModal {
  title?: string
}

export const Modal: FC<IModal> = (params) => {
  
  const {
    children, title
  } = params;

  const navigate = useNavigate();

  return (
    <div className="modal-overlay overlay active">
      <div className="modal game-border fancy" 
        style={{width: '600px', height: '316px', marginBottom: 0}}>
        <div className="close-btn click-cursor" onClick={() => navigate(-1)}>
        </div>
        {
          title? 
          <h3 className="modal-title fancy">
            <span>{title}</span>
          </h3>:''
        }
        <div className="modal-body">
          { children }
        </div>
      </div>
    </div>
  )
}

export const LandViewBoard:FC<IModal> = (params) => {
  
  const {
    children
  } = params;

  const navigate = useNavigate();

  return (
    <div className="land-view-container col md:w-2/3 w-4/5 game-border fancy">
      <div className="close-btn click-cursor" onClick={() => navigate(-1)}/>
      <h2 className="land-view__heading">View All Assets</h2>
        { children }
    </div>)
}