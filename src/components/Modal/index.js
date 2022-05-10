import React from "react";

const Modal = () => {
  <div className="modal-overlay overlay active">
    <div className="modal game-border fancy" 
      style={{width: '600px', height: '316px', marginBottom: 0}}>
      <div className="close-btn click-cursor"></div>
      <h3 className="modal-title fancy">
        <span>Marketplace</span>
      </h3>
      <div className="modal-body">
        <button className="green-button click-cursor"> View Items </button>
        <button className="green-button click-cursor"> Buy Items </button>
      </div>
    </div>
  </div>
}