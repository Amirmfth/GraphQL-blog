// graphql
import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../../graphql/queries";
// hooks
import { useNavigate, useParams } from "react-router-dom";
// components
import Loader from "../shared/Loader";
// mui
import {
  Avatar,
  Box,
  Container,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// icons
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitize from "sanitize-html";

function BlogPage() {
  const navigate = useNavigate();
  // states
  const { slug } = useParams();
  // api data
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  if (error) return <h1>Something went wrong</h1>;
  return (
    <Container maxWidth="lg">
      <Grid2 container>
        <Grid2 size={12} mt={9}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackRoundedIcon />
          </IconButton>
          <Typography
            variant="h4"
            component={"h2"}
            color="primary"
            fontWeight={700}
            maxWidth={900}
            margin={"auto"}
            mt={3}
            textAlign={"center"}
          >
            {data.post.title}
          </Typography>
        </Grid2>
        <Grid2 size={12} mt={6}>
          <Box sx={{ width: "70%", margin: "0 auto" }}>
            <img
              src={data.post.coverPhoto.url}
              alt={data.post.slug}
              width="100%"
              style={{ borderRadius: 15 }}
            />
          </Box>
        </Grid2>
        <Grid2 size={12}>
          <Stack direction="row" alignItems={"center"}>
            <Avatar
              src={data.post.author.avatar.url}
              sx={{
                width: 80,
                height: 80,
                marginLeft: "10%",
                marginRight: "15px",
              }}
            />
            <Box component="div">
              <Typography component={"p"} variant="h5" fontWeight={700}>
                {data.post.author.name}
              </Typography>
              <Typography component={"p"} variant="p" color="text.secondary">
                {data.post.author.field}
              </Typography>
            </Box>
          </Stack>
        </Grid2>
        <Grid2 size={12} mt={5}>
          <Box component={"div"} width="80%" margin={"auto"}
          fontWeight={500}
          lineHeight={1.5}
            dangerouslySetInnerHTML={{
              __html: sanitize(data.post.content.html),
            }}
          ></Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default BlogPage;
