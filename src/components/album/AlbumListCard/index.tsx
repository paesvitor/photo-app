import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

interface Props {
  title: string;
}

function AlbumListCard(props: Props) {
  const { title } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  );
}

export default AlbumListCard;
