import React from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';
import appStyle from '../Themes/Application.module.css';

export default function AlertMsg(alert) {
  
  return (
    <div 
    className={`${appStyle.alertMessage} ${ alert.alertInfo.type === 'error' ? appStyle.alertError : appStyle.alertSuccess }`}>
      <p>{alert.alertInfo.msg}</p>
      <Button onClick={() => alert.setFunction(false)}>
        <CancelIcon />
      </Button>
    </div>
  );
}
