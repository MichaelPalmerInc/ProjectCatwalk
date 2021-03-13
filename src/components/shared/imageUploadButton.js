import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import config from '../../config/config';
import { Button, makeStyles } from '@material-ui/core';

// Something really basic to generate a unique id for the button
let idCounter = 0;
const uniqueId = () => {
  const id = ++idCounter;
  return 'image-upload-button-' + id;
};

const useStyles = makeStyles((theme) => ({
  imageUploader: {},
}));

/**
 * Mandatory Props:
 * triggerUpload = a boolean value that when set to true will trigger the upload process
 * onUploadSuccess = a function that will be called when the upload has succeeded, containing an array
 *                   of urls for the uploaded files
 *
 * onUploadFailure = a function that will be passed the error message from the server in the case of
 *                   upload failure.
 */
const ImageUploadButton = (props) => {
  const classes = useStyles(props);
  const id = useRef(uniqueId());
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (images.length && props.triggerUpload) {
      const formData = new FormData();
      formData.append('useFilename', 'false');
      formData.append('overwrite', 'false');
      formData.append('path', '/');
      images.forEach((file) => {
        formData.append('files', file);
      });
      axios
        .post('https://api.image4.io/v1.0/uploadImage', formData, {
          auth: {
            username: config.image4io.username,
            password: config.image4io.secret,
          },
        })
        .then((res) => {
          if (typeof props.onUploadSuccess === 'function') {
            const urls = res.data.uploadedFiles.map((file) => file.url);
            props.onUploadSuccess(urls);
          }
        })
        .catch((err) => {
          if (typeof props.onUploadFailure === 'function') {
            props.onUploadFailure(err.response);
          }
        });
    } else if (props.triggerUpload && typeof props.onUploadSuccess === 'function') {
      props.onUploadSuccess([]);
    }
  }, [props]);

  const addImage = (image) => {
    const newImages = [...images];
    newImages.push(image);
    setImages(newImages);
    setImageUrls([...imageUrls, URL.createObjectURL(image)]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    const newImageUrls = [...imageUrls];
    newImages.splice(index, 1);
    newImageUrls.splice(index, 1);
    setImages(newImages);
    setImageUrls(newImageUrls);
  };

  return (
    <div className={classes.imageUploader}>
      <div className={classes.imagePreviewContainer}>
        {imageUrls.map((image) => (
          <img alt="upload preview" className={classes.imagePreview} src={image} />
        ))}
      </div>
      <input onChange={(e) => addImage(e.target.files)} accept="image/*" hidden id={id.current} type="file" />
      <label htmlFor={id.current}>
        <Button variant="contained" component="span" color="primary">
          Upload Images
        </Button>
      </label>
    </div>
  );
};

export default ImageUploadButton;
