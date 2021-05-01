import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
  root: {
    flexGrow: 1,
    backgroundColor: '#ebc334',
    textAlign: 'center',
    height: '100px',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
        <div>
            <p>
                <Typography style={{fontFamily: 'Arial black',fontSize:"30px",fontWeight:"800", padding: "30px"}}>
                <span style={{color:"black"}}>HACKER</span> 
                <span style={{color:"black"}}>NEWS</span>
                <span style={{color:"black"}}>.</span> 
                </Typography>
            </p>
        </div>
    </div>
    </>
  );
}

export default Footer;
