import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Photo } from "store/modules/photo/types";

interface Props {
  photos: Photo[];
}

function PhotoList(props: Props) {
  const { photos } = props;

  return (
    <GridList cellHeight={300} cols={3}>
      {photos.map(photo => (
        <GridListTile key={photo.id} cols={1}>
          <img src={photo.url} alt={photo.title} />
          <GridListTileBar title={photo.title} />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default PhotoList;
