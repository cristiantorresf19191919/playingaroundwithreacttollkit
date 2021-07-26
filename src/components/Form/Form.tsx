import { AppBar, Button, Dialog, DialogContent, DialogContentText, makeStyles, Switch, Toolbar, Typography } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { toggleDarkMode } from '../../store/reducers/dark-mode/reducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import TextField from '@material-ui/core/TextField';
import './form.css'
import { calculateStrings, setStrings } from '../../store/reducers/automata/reducer';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Form = () => {
    const dispatch = useAppDispatch();
    const inputString = useAppSelector((state) => state.automata.inputString);
    const comparisonString = useAppSelector((state) => state.automata.comparisonString);
    const response = useAppSelector((state) => state.automata.response);
    const [mainTitle, setMainTitle] = React.useState(inputString);
    const [mainTitle2, setMainTitle2] = React.useState(comparisonString);
    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = (event: any) => {
        setMainTitle(event.target.value);
    };
    const handleChange2 = (event: any) => {
        setMainTitle2(event.target.value);
    };
    const handleButton = () => {
        if (!mainTitle || !mainTitle2) return alert("verifica los datos por favor")
        dispatch(setStrings({ inputString: mainTitle, comparisonString: mainTitle2 }))
        dispatch(calculateStrings());
        setOpen(true);
        setTimeout(() => {
            handleClose()
            setOpenDialog(true)
        }, 1200);
    };
    const classes = useStyles();
    return (
        <>
            <p className="info">response : <b>{response}</b> </p>
            <h5 className="info">
                <span>{mainTitle}</span>
                <span>{mainTitle2}</span>
            </h5>
            <div className={classes.container}>
                <TextField
                    label="Entrada"
                    variant="outlined"
                    onChange={handleChange}
                    value={mainTitle}
                />
                <br />
                <TextField
                    label="Punto de comparasion"
                    variant="outlined"
                    onChange={handleChange2}
                    value={mainTitle2}
                />
            </div>
            <Button variant="contained" color="secondary" onClick={handleButton}>
                Calcular
            </Button>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                
            >
                <DialogContent className={response == 'coincide' ? classes.success : classes.failed}>
                    <DialogContentText id="alert-dialog-description">
                        <h1>{response}</h1>
                    </DialogContentText>
                </DialogContent>

            </Dialog>

        </>


    );
};

const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
    },
    container: {
        display: 'flex',
        gap: "1rem",
        marginBottom: "2rem"
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    success:{
        background:"green",
       
    },
    failed:{
        background:"red"
    }
}));

export default Form;
