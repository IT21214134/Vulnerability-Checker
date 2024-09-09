import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import BlogNavbar from "./BlogNavbar";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("shortDescription", shortDescription);
    form.append("fullDescription", longDescription);
    form.append("image", image);

    axios
      .post(`http://localhost:8060/Blog/addBlog`, form)
      .then(() => {
        alert("Blog added");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleCatImg = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <BlogNavbar />
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "40px auto",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="title"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          sx={{ width: "100%", marginBottom: "20px" }}
        />
        <TextField
          id="description"
          label="Short Description"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          required
          sx={{ width: "100%", marginBottom: "20px" }}
        />
        <TextField
          id="description"
          label="Long Description"
          multiline
          rows={4}
          maxRows={4}
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          required
          sx={{ width: "100%", marginBottom: "20px" }}
        />
        <div>
          <input
            accept="image/*"
            id="image"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              handleCatImg(e);
            }}
          />
          <label htmlFor="image">
            <Button
              variant="contained"
              component="span"
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
            </Button>
          </label>
        </div>
        <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <Link to={"/ViewBlogs"} style={{ marginLeft: "20px" }}>
            <Button variant="contained" color="secondary">
              Back
            </Button>
          </Link>
        </div>
      </Box>
    </>
  );
};

export default AddBlog;
