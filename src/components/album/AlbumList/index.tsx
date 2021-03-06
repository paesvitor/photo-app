import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

import {albumActions} from 'store/modules/album/actions';
import {ApplicationState} from 'store';
import {Album} from 'store/modules/album/types';
import AlbumListCard from '../AlbumListCard';

function AlbumList() {
  const albumList = useSelector((state: ApplicationState) => state.album.list);
  const dispatch = useDispatch();

  function handleAlbumListRequest() {
    dispatch(albumActions.list.request());
  }

  useEffect(() => {
    handleAlbumListRequest();
  }, [handleAlbumListRequest]);

  if (albumList.loading) {
    return <LinearProgress />;
  }

  return (
    <Grid container spacing={3}>
      {albumList.data.map((album: Album) => (
        <Grid data-testid="album" item xs={12} sm={6} md={4} key={album.id}>
          <AlbumListCard album={album} />
        </Grid>
      ))}
    </Grid>
  );
}

export default AlbumList;
