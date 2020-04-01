import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

interface Props {
  photoUrl: string;
  isOpen: boolean;
  handleClose: () => void;
}

function PhotoLightbox(props: Props) {
  const { isOpen, photoUrl, handleClose } = props;

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle id="customized-dialog-title">
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <img src={photoUrl} title={photoUrl} />
    </Dialog>
  );
}

export default PhotoLightbox;
