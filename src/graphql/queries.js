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

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        ... on Post {
          id
          slug
          title
          coverPhoto {
            url
          }
        }
      }
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO };
