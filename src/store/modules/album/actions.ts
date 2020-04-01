import { action } from "typesafe-actions";
import { AlbumTypes, Album } from "./types";
import { Photo } from "../photo/types";

export const albumActions = {
  list: {
    request: () => action(AlbumTypes.LIST.REQUEST),
    success: (payload: Album[]) => action(AlbumTypes.LIST.SUCCESS, payload),
    failure: () => action(AlbumTypes.LIST.FAILURE)
  },

  show: {
    request: (id: string) => action(AlbumTypes.SHOW.REQUEST, id),
    success: (photos: Photo[], album: Album) =>
      action(AlbumTypes.SHOW.SUCCESS, { photos, album }),
    failure: () => action(AlbumTypes.SHOW.FAILURE)
  }
};
