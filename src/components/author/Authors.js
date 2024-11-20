import React from "react";
// graphql
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
// mui
import { Avatar, Divider, Grid2, Typography } from "@mui/material";

function Authors() {
  // api data
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Something went wrong</h1>;
  const { authors } = data;
  return (
    <Grid2
      container
      sx={{
        boxShadow: "rgba(0,0,0,.1)  0px 4px 12px",
        borderRadius: 4,
      }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid2 size={12} padding={2}>
            <a
              href={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginRight: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </a>
          </Grid2>
          {index !== authors.length - 1 && (
            <Grid2 size={12}>
              <Divider variant="middle" />
            </Grid2>
          )}
        </React.Fragment>
      ))}
    </Grid2>
  );
}

export default Authors;
