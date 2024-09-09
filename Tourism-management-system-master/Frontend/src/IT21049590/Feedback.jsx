import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BlogNavbar from "./BlogNavbar";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Paper,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import BlogFeedbacks from "./getFeedback";
const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 3,
});

const Field = styled(TextField)({
  marginBottom: 2,
});

const SubmitButton = styled(Button)({
  marginTop: 2,
});


const Feedback = ({ blogId }) => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  
  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8060/Blog/getBlogById/${id}`
        );
        setBlog(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    try {
      const response = await axios.post(
        `http://localhost:8060/Blog/addFeedback/${id}`,
        {
          firstName,
          lastName,
          rating,
          comment,
        }
      );
      console.log(response.data);
      setFirstName("");
      setLastName("");
      setRating("");
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <BlogNavbar />
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="1200px"
      mx="auto"
      px={{ xs: 2, sm: 4 }}
    >
      
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="stretch"
        my={4}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: { xs: "0 0 2rem 0", md: "0 2rem 0 0" },
            boxShadow: "none",
            borderRadius: "0",
          }}
        >
          <CardMedia
            component="img"
            height="500"
            image={`http://localhost:8060/${blog.image}`}
            alt={blog.title}
            sx={{ objectFit: "cover" }}
          />
          <CardContent sx={{ flexGrow: 1, padding: "2rem" }}>
            <Typography
              gutterBottom
              variant="h3"
              component="h1"
              sx={{ marginBottom: "1rem" }}
            >
              {blog.title}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
              {blog.shortDescription}
            </Typography>
            <Typography
              gutterBottom
              variant="h3"
              component="h1"
              sx={{ marginBottom: "1rem" }}
            >
              Description
            </Typography>
            <Typography variant="body1">{blog.fullDescription}</Typography>
          </CardContent>
        </Card>
      </Box>
      <BlogFeedbacks />
      <Box flex="1">
        <Box textAlign="center" my={4}>
          <Typography
            gutterBottom
            variant="h3"
            component="h1"
            sx={{ marginBottom: "1rem" }}
          >
            Feedback
          </Typography>
        </Box>

        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1.5rem",
            margin: "1rem",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Feedback Form
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <TextField
              required
              label="First Name"
              variant="outlined"
              margin="normal"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
            />
            <TextField
              required
              label="Last Name"
              variant="outlined"
              margin="normal"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
            />
            <FormControl
              required
              variant="outlined"
              style={{ margin: "1rem", minWidth: "120px" }}
            >
              <InputLabel>Rating</InputLabel>
              <Rating
                name="rating"
                value={rating}
                onChange={handleRatingChange}
              />
            </FormControl>
            <TextField
              label="Comment"
              variant="outlined"
              margin="normal"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              fullWidth
              multiline
              rows={4}
            />
            <Box textAlign="center" style={{ marginTop: "2rem" }}>
              <Button variant="contained" color="primary" type="submit">
                Submit Feedback
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Box>
    </>
  );
};

export default Feedback;
