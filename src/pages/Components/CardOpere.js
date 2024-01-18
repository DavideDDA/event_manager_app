import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import eventImage from "../../Assets/event3.jpg";
import { Typography, Stack, Grid, IconButton, Divider } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useNavigate } from "react-router-dom";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function CardOpere({ description, title, id }) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "15rem",textAlign: "left" }}>
      <CardMedia
        component="img"
        height="100"
        image={eventImage}
        alt="green iguana"
      />
      <Grid container direction={"row"} justifyContent={"space-around"}>
        <Grid item>
          {" "}
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Grid>
      
        <Grid item>
          {" "}
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"}>
            <IconButton aria-label="edit" color="primary">
              <BorderColorIcon />
            </IconButton>
            <IconButton aria-label="delete" color="error">
              <DeleteOutlineIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
export default CardOpere;
