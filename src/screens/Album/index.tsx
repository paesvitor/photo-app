import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { albumActions } from "store/modules/album/actions";
import PhotoList from "components/photo/PhotoList";
import { ApplicationState } from "store";
import { LinearProgress, Box, Typography, Container } from "@material-ui/core";

interface RouteParams {
  id: string;
}

function AlbumScreen() {
  const params = useParams<RouteParams>();
  const dispatch = useDispatch();
  const albumShow = useSelector((state: ApplicationState) => state.album.show);

  function handleAlbumShowRequest() {
    dispatch(albumActions.show.request(params.id));
  }

  useEffect(() => {
    handleAlbumShowRequest();
  }, []);

  if (albumShow.loading) {
    return <LinearProgress />;
  }

  return (
    <Container>
      <Box my={10}>
        <Typography align="center" variant="h1">
          {albumShow.data.album.title}
        </Typography>
      </Box>

      <PhotoList photos={albumShow.data.photos} />
    </Container>
  );
}

export default AlbumScreen;
