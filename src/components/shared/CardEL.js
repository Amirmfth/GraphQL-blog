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

function CardEL({ title, slug, author, coverPhoto }) {
  return (
    <Card
      sx={{
        boxShadow: "rgba(0,0,0,.1)  0px 4px 12px",
        borderRadius: 4,
        height: "100%",
      }}
    >
      {author && (
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
      )}

      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "230px",
        }}
      >
        <CardContent>
          <Typography
            component="h3"
            variant="h6"
            color="text.primary"
            fontWeight={600}
          >
            {title}
          </Typography>
        </CardContent>
        <div>
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
        </div>
      </div>
    </Card>
  );
}

export default CardEL;
