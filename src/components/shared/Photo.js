import { makeStyles, Modal } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles({
  photo: {
    width: '10rem',
    height: '6.5rem',
    overflow: 'hidden',
    margin: '0.5rem',
    '&:first-child': {
      'margin-left': 0,
    },
    '& img': {
      width: 'inherit',
      cursor: 'pointer',
    },
  },
  modalContent: {
    position: 'absolute',
    left: 'calc(10vw - 3rem)',
    top: 'calc(10vh - 3rem)',
    width: '80vw',
    height: '80vh',
    background: '#000',
    padding: '3rem',
    display: 'flex',
    'justify-content': 'center',
    'align-content': 'center',
    outline: 0,
  },
  modalImg: {
    'max-width': '80vw',
    'max-height': '80vh',
  },
});

const Photo = (props) => {
  const [open, changeOpen] = useState(false);
  const classes = useStyles(props);
  const handleOpen = () => {
    console.log('IMG clicked');
    changeOpen(true);
  };
  const handleClose = () => {
    console.log('modal closed');
    changeOpen(false);
  };
  return (
    <div className={classes.photo}>
      <img src={props.src} alt="" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Image modal"
        aria-describedby="A popup displaying a larger version of the image clicked"
      >
        <div className={classes.modalContent}>
          <img src={props.src} alt="" className={classes.modalImg} />
        </div>
      </Modal>
    </div>
  );
};

export default Photo;
