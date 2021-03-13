import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Modal,
  Radio,
  RadioGroup,
  TextareaAutosize,
  TextField,
} from '@material-ui/core';
import { Fragment } from 'react';
import { useState } from 'react';
import apiController from '../../apiController';
import Rating from '../shared/Rating';
import { characteristicValues } from './Reviews';

const useStyles = makeStyles((theme) => ({
  addReviewModal: {
    font: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    '& h1': {
      fontSize: '2rem',
    },
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 10, 6),
    outline: 0,
    maxHeight: '80vh',
    overflow: 'auto',
  },
  submit: {
    display: 'block',
    margin: '2rem auto 0 auto',
  },
  h1: {
    fontSize: '2rem',
  },
  label: {
    fontSize: '0.8rem',
    textAlign: 'center',
  },
  characteristicRadios: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    justifyItems: 'center',
  },
}));

const AddReviewModal = (props) => {
  const classes = useStyles(props);

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [bodyValid, setBodyValid] = useState(true);
  const [recommend, setRecommend] = useState('');
  const [summary, setSummary] = useState('');
  const [characteristics, setCharacteristics] = useState(new Array(6).fill(0));
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const charObj = Object.keys(props.characteristics).reduce((obj, key, i) => {
      obj[props.characteristics[key].id] = parseInt(characteristics[i]);
      return obj;
    }, {});
    const params = {
      product_id: props.productId,
      rating,
      summary,
      body,
      recommend: recommend === 'true',
      name: nickname,
      email,
      characteristics: charObj,
    };
    apiController.postReview(params);
    handleClose();
  };

  const handleClose = () => {
    setNickname('');
    setEmail('');
    setBody('');
    setRecommend('');
    setSummary('');
    setCharacteristics(characteristics.fill(0));
    setRating(0);
    props.onClose();
  };

  const setCharacteristic = (index, value) => {
    const newChars = [...characteristics];
    newChars[index] = value;
    setCharacteristics(newChars);
  };

  const validateBody = () => {
    setBodyValid(body.length > 50);
  };

  return (
    <Modal open={props.open} onClose={handleClose} className={classes.addReviewModal}>
      <div className={classes.modalContent}>
        <h1>Add a Review</h1>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset">
            <Rating
              name="new-review-rating"
              value={rating}
              onChange={(e, v) => {
                setRating(v);
              }}
              precision={1}
            />
            <TextField
              required
              fullWidth
              label="Nickname:"
              placeholder="Example jackson11!"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <TextField
              required
              fullWidth
              label="Email:"
              placeholder="Example: jackson11@email.com"
              helperText="For authentication reasons, you will not be emailed"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel style={{ marginTop: '1rem' }}>Do you recommend this product?</FormLabel>
            <RadioGroup
              row
              aria-label="recommend"
              name="recommend"
              value={recommend}
              onChange={(e) => setRecommend(e.target.value)}
            >
              <FormControlLabel value="true" control={<Radio color="primary" />} label="Yes" />
              <FormControlLabel value="false" control={<Radio color="primary" />} label="No" />
            </RadioGroup>
            {Object.keys(props.characteristics).map((characteristic, i) => (
              <div style={{ marginTop: '2rem' }}>
                <FormLabel>{characteristic}</FormLabel>
                <RadioGroup
                  className={classes.characteristicRadios}
                  row
                  aria-label={characteristic}
                  name={characteristic}
                  value={characteristics[i]}
                  onChange={(e) => setCharacteristic(i, e.target.value)}
                >
                  {characteristicValues.newReview[characteristic].map((label, j) => (
                    <FormControlLabel
                      labelPlacement="bottom"
                      value={(j + 1).toString()}
                      control={<Radio color="primary" />}
                      label={label}
                      classes={{
                        label: classes.label,
                      }}
                    />
                  ))}
                </RadioGroup>
              </div>
            ))}
            <TextField
              fullWidth
              label="Summary:"
              placeholder="Example: Best purchase ever!"
              helperText={summary.length + '/60'}
              value={summary}
              onChange={(e) => setSummary(e.target.value.substr(0, 60))}
            />
            <TextField
              required
              fullWidth
              multiline
              label="Body:"
              helperText={body.length > 50 ? body.length + '/1000' : body.length + '/50'}
              placeholder="Why did you like the product or not?"
              value={body}
              error={!bodyValid}
              onChange={(e) => {
                setBody(e.target.value.substr(0, 1000));
                validateBody();
              }}
              onBlur={validateBody}
            />
            <Button className={classes.submit} type="submit" variant="contained" color="primary">
              Submit Review
            </Button>
          </FormControl>
        </form>
      </div>
    </Modal>
  );
};

export default AddReviewModal;
