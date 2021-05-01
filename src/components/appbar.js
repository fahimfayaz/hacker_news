import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "1px 8px 5px #e8e6e6"
  },
}));

function Appbar() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#ffffff'}}>
        <div className="App">
            <p>
              <Typography style={{fontFamily: 'Arial black',textAlign:"center",fontSize:"30px",fontWeight:"800"}}>
                <span style={{color:"#ebc334"}}>HACKER</span> 
                <span style={{color:"black"}}>NEWS</span>
                <span style={{color:"#ebc334"}}>.</span> 
              </Typography>
            </p>
        </div>
      </AppBar>
    </div>
    </>
  );
}

export default Appbar;
