// mui
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
// router
import { Link } from "react-router-dom";

function CardEL({ post: { title, slug, author, coverPhoto, id } }) {
  return (
    <Card
      sx={{
        boxShadow: "rgba(0,0,0,.1)  0px 4px 12px",
        borderRadius: 4,
        height: "500px",
      }}
    >
      <CardHeader
        avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
        title={
          <Typography
            component="p"
            variant="p"
            color="text.secondary"
            fontWeight={500}
          >
            {author.name}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent sx={{ height: "130px" }}>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            Read more...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
