import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="#primary"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        Blog Website with GraphQl - developed by Amir with ❤️
      </Typography>
    </footer>
  );
}

export default Footer;
