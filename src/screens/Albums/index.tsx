import React from 'react';
import AlbumList from 'components/album/AlbumList';
import {Typography, Box, Container} from '@material-ui/core';

function AlbumsScreen() {
  return (
    <Container>
      <Box my={10}>
        <Typography variant="h1" align="center">
          Albums
        </Typography>
      </Box>
      <AlbumList />
    </Container>
  );
}

export default AlbumsScreen;
