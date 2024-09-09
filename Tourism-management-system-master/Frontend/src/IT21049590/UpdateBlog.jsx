import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import BlogNavbar from "./BlogNavbar";
const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setLongDescription] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  //const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8060/Blog/getBlogById/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setShortDescription(response.data.shortDescription);
        setLongDescription(response.data.fullDescription);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("shortDescription", shortDescription);
    form.append("fullDescription", fullDescription);
    form.append("image", image);

    axios
      .put(`http://localhost:5000/Blog/updateBlog/${id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Blog updated");
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
        <div>
          <TextField
            id="title"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            sx={{ width: "100%", marginBottom: "20px" }}
          />
        </div>

        <div>
          <TextField
            id="shortDescription"
            label="Short Description"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            required
            sx={{ width: "100%", marginBottom: "20px" }}
          />
        </div>

        <div>
          <TextField
            id="longDescription"
            label="Long Description"
            multiline
            rows={4}
            maxRows={4}
            value={fullDescription}
            onChange={(e) => setLongDescription(e.target.value)}
            required
            sx={{ width: "100%", marginBottom: "20px" }}
          />
        </div>

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

        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ width: "100%", marginBottom: "20px" }}
          >
            Update
          </Button>
        </div>

        <div className="buttons">
          <div>
            <Link to={"/ViewBlogs"}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: "100%", marginBottom: "20px" }}
              >
                Back
              </Button>
            </Link>
          </div>
        </div>
      </Box>
    </>
  );
};

export default UpdateBlog;
