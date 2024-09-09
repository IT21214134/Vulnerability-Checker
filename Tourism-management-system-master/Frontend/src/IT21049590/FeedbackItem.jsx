import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import BlogNavbar from "./BlogNavbar";

const Feedback = (props) => (
  <Box
    sx={{
      padding: (theme) => theme.spacing(2),
      border: (theme) => `1px solid ${theme.palette.grey[300]}`,
      borderRadius: (theme) => theme.shape.borderRadius,
    }}
    {...props}
  />
);

const FeedbackHeader = (props) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      marginBottom: (theme) => theme.spacing(2),
    }}
    {...props}
  />
);

const Avatar = (props) => (
  <Box sx={{ marginRight: (theme) => theme.spacing(2) }} {...props} />
);

const FeedbackItem = ({ feedback }) => {
  return (
    <Feedback>
     
      <FeedbackHeader>
        <Typography variant="h6">
          {feedback.firstName} {feedback.lastName}
        </Typography>
        <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
          <Rating value={feedback.rating} readOnly />
          <Box sx={{ ml: 1 }}>{feedback.rating.toFixed(1)}</Box>
        </Box>
      </FeedbackHeader>
      <Typography>{feedback.comment}</Typography>
    </Feedback>
  );
};

export default FeedbackItem;
