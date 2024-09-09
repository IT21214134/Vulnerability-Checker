import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";
import { MDBCardImage } from "mdb-react-ui-kit";
import BlogNavbar from "./BlogNavbar";
import Button from "@mui/material/Button";
import "./Blog.css";
import axios from "axios";

export default function ViewBlogs() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    function getBlog() {
      axios
        .get(`http://localhost:8060/Blog/viewAll`)
        .then((res) => {
          setBlog(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getBlog();
  }, []);

  const deleteData = (e) => {
    var result = window.confirm("Are you sure?");
    if (result === true) {
      axios
        .delete(`http://localhost:8060/Blog/deleteBlog/${e._id}`)
        .then((res) => {})
        .catch((e) => {
          alert(e);
        });
    } else {
      e.preventDefault();
    }
  };

  return (
    <>
      <BlogNavbar />
      <div className="view-blogs-container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Short Description</th>
              <th scope="col">Long Description</th>
              <th scope="col">Image</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Feedbacks</th>
            </tr>
          </thead>

          <tbody>
            {blog.map((e, i) => (
              <tr key={i}>
                <td>{e.title}</td>
                <td>{e.shortDescription}</td>
                <td>{e.fullDescription}</td>
                <td>
                  <MDBCardImage
                    src={`http://localhost:8060/${e.image}`}
                    alt="Blog Image"
                    className="blog-image"
                    fluid
                  />
                </td>
                <td>
                  <Link to={`/UpdateBlog/${e._id}`}>
                    <button className="edit-button">Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => deleteData(e)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/BlogFeedbacks/${e._id}`}>
                    <button className="feedback-button">Feedback</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-blog-button-container">
          <center>
            <Link to="/AddBlog">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: "100%", marginBottom: "20px" }}
              >
                Add Blog
              </Button>
            </Link>
          </center>
        </div>
      </div>
    </>
  );
}
