import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProgrammingLanguagesList from '../../components/Home/ProgrammingLanguagesList';
import Form from '../../components/Form/Form';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.welcomeMessage}>Compara tu string de inmediato</div>
      <Form/>


    </div>
  );
};

const useStyles = makeStyles((theme:any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  welcomeMessage: {
    padding: '15px',
    fontSize: '30px',
    color: theme.font,
  },
}));

export default Home;
