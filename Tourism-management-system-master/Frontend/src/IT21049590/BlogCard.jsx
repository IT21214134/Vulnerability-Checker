import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const BlogCard = ({ blog }) => {
  return (
    <Card >
      <CardMedia
        component="img"
        height="140"
        image={`http://localhost:5000/${blog.image}`}
        alt={blog.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {blog.shortDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
