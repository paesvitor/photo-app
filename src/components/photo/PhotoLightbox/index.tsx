import React from 'react';
import {Dialog, DialogTitle} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface Props {
  photoUrl: string;
  isOpen: boolean;
  handleClose: () => void;
}

function PhotoLightbox(props: Props) {
  const {isOpen, photoUrl, handleClose} = props;

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle data-testid="photo-lightbox">
        <IconButton
          data-testid="close"
          aria-label="close"
          onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <img data-testid="image" src={photoUrl} alt={photoUrl} />
    </Dialog>
  );
}

export default PhotoLightbox;
