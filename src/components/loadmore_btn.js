import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    width: '100%',
    height: '70px',
    textTransform: 'none',
    fontSize: 16,
    fontWeight: '800',
    color: 'black',
    border: '1px solid',
    borderRadius: '0.5rem',
    lineHeight: 1.5,
    backgroundColor: '#ebc334',
    borderColor: '#ebc334',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#ebdc34',
      borderColor: '#ebdc34',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

export default function CustomizedButtons() {

  return (
    <div style={{margin:"16px"}}>
      <BootstrapButton variant="contained" color="primary">
        Load More
      </BootstrapButton>
    </div>
  );
}