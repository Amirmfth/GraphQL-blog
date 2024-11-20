import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query getBlogsInfo {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
      title
      slug
      id
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query getAuthorsInfo {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO };
