// mui
import { Button, Grid2, TextField, Typography } from "@mui/material";
// hooks
import { useState } from "react";
// graphql
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../../graphql/mutations";
// helper
import { validateEmail } from "../../helper/validation";
// packages
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommentForm({ slug }) {
  // states
  const [form, setForm] = useState({ name: "", email: "", text: "" });
  const { name, email, text } = form;
  const [successFlag, setSuccessFlag] = useState(false);

  //   api data
  const [createComment, { loading, data, error }] = useMutation(
    CREATE_COMMENT,
    { variables: { name, email, text, slug } }
  );

  //   handlers
  const formHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setForm((prevForm) => ({ ...prevForm, name: value }));
        break;
      case "email":
        setForm((prevForm) => ({ ...prevForm, email: value }));
        break;
      case "text":
        setForm((prevForm) => ({ ...prevForm, text: value }));
        break;
      default:
        return;
    }
  };

  const sendHandler = () => {
    if (!name || !email || !text) {
      toast.warn("Please complete all fields!");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Invalid email");
      return;
    }
    setSuccessFlag(false)
    createComment();
    setForm({ name: "", email: "", text: "" })
  };

  const enterHandler = (event) => {
    if (event.key === "Enter") {
      sendHandler();
    }
  };

  if (data && !successFlag) {
    toast.success("Comment is sent and is waiting for validation");
    setSuccessFlag(true)
  }

  return (
    <Grid2
      container
      sx={{
        boxShadow: "rgba(0,0,0,.1) 0 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      {/* header */}
      <Grid2 size={12} m={2}>
        <Typography
          component={"p"}
          variant="h6"
          fontWeight={700}
          color="primary"
        >
          Write your comment
        </Typography>
      </Grid2>
      {/* username */}
      <Grid2 size={12} m={2}>
        <TextField
          name="username"
          label="Username"
          type="text"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={formHandler}
          onKeyDown={enterHandler}
        />
      </Grid2>
      {/* email */}
      <Grid2 size={12} m={2}>
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={formHandler}
          onKeyDown={enterHandler}
        />
      </Grid2>
      {/* comment */}
      <Grid2 size={12} m={2}>
        <TextField
          name="text"
          label="Comment"
          type="text"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={formHandler}
          onKeyDown={enterHandler}
          multiline
          minRows={4}
        />
      </Grid2>
      {/* button */}
      <Grid2 size={12} m={2} display={"flex"} justifyContent={"flex-end"}>
        {loading ? (
          <Button disabled>Sending...</Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            Send
          </Button>
        )}
      </Grid2>
      <ToastContainer position="top-center" />
    </Grid2>
  );
}

export default CommentForm;
