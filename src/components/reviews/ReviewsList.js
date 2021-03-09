import { makeStyles } from '@material-ui/core/styles';
import Review from './Review';

const useStyles = makeStyles({
  root: {},
  count: {
    'font-weight': 'bold',
    'font-size': '1.2rem',
  },
  sortDropdown: {
    border: 'none',
    'font-size': 'inherit',
    'font-weight': 'inherit',
    'font-family': 'inherit',
    'border-bottom': '2px solid black',
    'line-height': 1,
    padding: 0,
    'padding-right': '1rem',
    'box-sizing': 'border-box',
  },
  buttons: {
    'margin-top': '1.5rem',
    display: 'flex',
    '& button': {
      'margin-right': '0.75rem',
    },
  },
});

const ReviewsList = (props) => {
  const classes = useStyles(props);
  return (
    <div className={`${props.className}`}>
      <div className={classes.count}>
        248 Reviews, sorted by{' '}
        <select className={classes.sortDropdown}>
          <option selected>relevance</option>
        </select>
      </div>
      <div className={classes.reviewList}>
        {props.data.map((review) => (
          <Review refresh={props.refresh} {...review} />
        ))}
      </div>
      <div className={classes.buttons}>
        {props.loadMore ? <button onClick={props.loadMore}>More Reviews</button> : ''}
        <button>Add Review</button>
      </div>
    </div>
  );
};

export default ReviewsList;
