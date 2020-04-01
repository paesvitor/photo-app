import React, { useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Photo } from "store/modules/photo/types";
import PhotoLightbox from "components/photo/PhotoLightbox";

interface Props {
  photos: Photo[];
}

function PhotoList(props: Props) {
  const { photos } = props;
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  function handleSelectPhoto(photoUrl: string) {
    setSelectedPhoto(photoUrl);
    setLightboxIsOpen(true);
  }

  function handleCloseLightbox() {
    setLightboxIsOpen(false);
  }

  return (
    <>
      <PhotoLightbox
        isOpen={lightboxIsOpen}
        photoUrl={selectedPhoto}
        handleClose={handleCloseLightbox}
      />
      <GridList cellHeight={300} cols={3}>
        {photos.map(photo => (
          <GridListTile key={photo.id} cols={1}>
            <img
              src={photo.url}
              alt={photo.title}
              onClick={() => handleSelectPhoto(photo.url)}
            />
            <GridListTileBar title={photo.title} />
          </GridListTile>
        ))}
      </GridList>
    </>
  );
}

export default PhotoList;
