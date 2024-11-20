import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="800" flex={1}>
            Amirmfth Blog
          </Typography>
          <Link to="/" style={{color: "inherit"}}>
          <IconButton color="inherit" size="large" edge="start">
            <BookIcon />
          </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
