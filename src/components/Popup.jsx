import React from 'react';
import { Button } from 'antd';
import './Popup.css';

function Popup({closePopup}, data) {
  const value = JSON.stringify(data)
  
  return (
    <div className="popupBackground">
      <div className="popupContainer">
          <Button onClick={() => 
      closePopup(false)
          }> X </Button>
        <div className="title">
          <h1> Popup </h1>
          </div>
        <div className="body">
          <p>value</p>
          </div>
        <div className="footer">
        </div>
      </div>
    </div>
  )
}

export default Popup;