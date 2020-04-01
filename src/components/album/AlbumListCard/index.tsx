import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import { Album } from "store/modules/album/types";

interface Props {
  album: Album;
}

function AlbumListCard(props: Props) {
  const {
    album: { title, id }
  } = props;
  const classes = useStyles();

  return (
    <Link to={`/album/${id}`}>
      <Card className={classes.root}>
        <CardContent>
          <Typography>{title}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default AlbumListCard;
