// grapgql
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
// hooks
import { useParams } from "react-router-dom";
// mui
import { Avatar, Container, Grid2, Typography } from "@mui/material";
// packages
import sanitizeHTML from "sanitize-html";
// components
import Loader from "../shared/Loader";
import CardEL from "../shared/CardEL";

function AuthorPage() {
  // states
  const { slug } = useParams();
  // api data
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  if (error) return <h1>Something went wrong</h1>;
  console.log(data);
  const {
    author: { name, field, avatar, description, posts },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid2 container mt={10}>
        <Grid2
          size={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar.url} sx={{ width: "250px", height: "250px" }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid2>
        <Grid2 size={12} mt={5} fontSize="1.3rem" lineHeight={1.5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHTML(description.html),
            }}
          ></div>
        </Grid2>
        <Grid2 size={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight="700">
            {name} Blogs
          </Typography>
        </Grid2>
        <Grid2 container spacing={2} mt={2}>
          {posts.map((post) => (
            <Grid2 key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <CardEL
                title={post.title}
                slug={post.slug}
                coverPhoto={post.coverPhoto}
              />
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default AuthorPage;
