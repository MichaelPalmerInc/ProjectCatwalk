import { makeStyles } from '@material-ui/core';
import Photo from './Photo';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    'flex-flow': 'row wrap',
  },
});

const PhotoList = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      {props.photos.map((photo) => {
        return <Photo src={photo.url} />;
      })}
    </div>
  );
};

export default PhotoList;
