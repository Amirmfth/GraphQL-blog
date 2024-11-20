import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);

  if (loading) return <h1>Loading...</h1>;
  
  if (error) return <h1>Something went wrong</h1>;
  console.log(data);
  return <div></div>;
}

export default Blogs;
