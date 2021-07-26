import { AppBar, makeStyles, Switch, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { toggleDarkMode } from '../../../store/reducers/dark-mode/reducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import DarkModeIcon from '@material-ui/icons/Brightness2';

const Header = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Compara string
        </Typography>
        <DarkModeIcon />
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />        
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
  },
}));

export default Header;
