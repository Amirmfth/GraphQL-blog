// graphql
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
// mui
import { Grid2 } from "@mui/material";
// components
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);

  if (loading) return <Loader />;

  if (error) return <h1>Something went wrong</h1>;
  return (
    <Grid2 container spacing={2}>
      {data.posts.map((post) => (
        <Grid2 key={post.id} size={{ xs: 12, sm: 6, lg: 4 }}>
          <CardEL  {...post} />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Blogs;
