import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px',
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.8),
    },
  },
}));

export default function Chips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip label="New" style={{fontFamily: 'Arial black',backgroundColor:"#ebc334",fontSize:"x-large",fontWeight:"600",width: "100px", height: "40px"}}/>
      <Chip label="Past" style={{fontFamily: 'Arial black',fontSize:"x-large",fontWeight:"600", width: "100px", height: "40px"}}/>
    </div>
  );
}