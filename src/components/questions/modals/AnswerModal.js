import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import AnswerForm from './AnswerForm.js';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 10, 6),
    },
    mystyle: {
        backgroundColor: "white",
        padding: "0px",
        fontSize: "small",
        border: 'none',
        cursor: 'pointer',
        textTransform: 'capitalize',
        'margin-top': '-5px'
      }
}));

var AnswerModal = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>

            <Button className={classes.mystyle} onClick={handleOpen}>
                Add Answer
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h1 style = {{fontSize: '2em'}}>Submit your Answer</h1>
                        <h2 style = {{fontSize: '1.5em'}}></h2>
                        <AnswerForm handleClose = {handleClose} questionId = {props.questionId}/>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}



export default AnswerModal;