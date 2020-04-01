import { action } from "typesafe-actions";
import { AlbumTypes, Album } from "./types";

export const albumActions = {
  list: {
    request: () => action(AlbumTypes.LIST.REQUEST),
    success: (payload: Album[]) => action(AlbumTypes.LIST.SUCCESS, payload),
    failure: () => action(AlbumTypes.LIST.FAILURE)
  }
};
