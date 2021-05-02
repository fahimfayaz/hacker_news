import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButtonA = withStyles({
  root: {
    boxShadow: 'none',
    //width: '30px',
    height: '40px',
    textTransform: 'none',
    fontSize: 16,
    fontWeight: '800',
    color: 'black',
    border: '1px solid',
    borderRadius: '1.3rem',
    lineHeight: 1.5,
    backgroundColor: '#ebc334',
    borderColor: '#ebc334',
    fontFamily: 'Arial black',
    '&:hover': {
      backgroundColor: '#ebdc34',
      borderColor: '#ebdc34',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ebdc34',
      borderColor: '#ebdc34',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const BootstrapButtonB = withStyles({
  root: {
    boxShadow: 'none',
    //width: '30px',
    height: '40px',
    textTransform: 'none',
    fontSize: 16,
    fontWeight: '800',
    color: 'black',
    border: '1px solid',
    borderRadius: '1.3rem',
    lineHeight: 1.5,
    backgroundColor: '#ededed',
    borderColor: '#ededed',
    fontFamily: 'Arial black',
    '&:hover': {
      backgroundColor: '#e3e1e1',
      borderColor: '#e3e1e1',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#c9c9c9',
      borderColor: '#c9c9c9',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

export default function Chips() {
  //const classes = useStyles();

  return (
    <>
    <div style={{display:'flex'}}>
      <div style={{marginLeft:"22px", marginRight:"12px"}}>
        <BootstrapButtonA variant="contained" color="primary">
          New
        </BootstrapButtonA>
      </div>
      <div style={{marginLeft:"12px", marginRight:"22px"}}>
        <BootstrapButtonB variant="contained" color="primary">
          Past
        </BootstrapButtonB>
      </div>
    </div>
    </>
  );
}