import React, {FC} from "react";

export interface IModal {
  title?: string
}

export const Modal: FC<IModal> = (params) => {
  
  const {
    children, title
  } = params;

  return (
    <div className="modal-overlay overlay active">
      <div className="modal game-border fancy" 
        style={{width: '600px', height: '316px', marginBottom: 0}}>
        <div className="close-btn click-cursor"></div>
        <h3 className="modal-title fancy">
          <span>{title}</span>
        </h3>
        <div className="modal-body">
          {
            children
          }
          {/* <button className="green-button click-cursor"> View Items </button>
          <button className="green-button click-cursor"> Buy Items </button> */}
        </div>
      </div>
    </div>
  )
}