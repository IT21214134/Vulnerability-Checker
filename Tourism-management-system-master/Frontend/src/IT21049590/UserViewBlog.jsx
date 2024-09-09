import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogNavbar from "./BlogNavbar";
import { MDBContainer, MDBRow, MDBCol, MDBCard } from "mdbreact";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import Header from "../IT21042560/header";
import "./Blog1.css";
import { Box, styled } from "@mui/system";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();
  const [serQuery, setQuery] = useState("");
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8060/Blog/viewAll")
      .then((response) => {
        setBlogs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //refreash

  function refreshPage() {
    window.location.reload(false);
  }

  const MyCard = styled(Card)(({ theme }) => ({
    width: "700px",
    margin: "10px",
    height: "400px",
    alignItems: "center",
    marginLeft: "150px",
    marginTop: "50px",
    transition: "transform 0.5s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  }));

  const [isLiked, setIsLiked] = useState();
  const [isDisliked, setIsDisliked] = useState();

  const handleLikeButton = async (bid) => {
    try {
      const response = await axios.patch("http://localhost:8060/Blog/like", {
        id: id,
        bid: bid,
      });
      setIsLiked(response.data.post.isLiked);
      setIsDisliked(response.data.post.isDisliked);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDislikeButton = async (bid) => {
    try {
      const response = await axios.patch("http://localhost:8060/Blog/dislike", {
        id: id,
        bid: bid,
      });
      setIsLiked(response.data.post.isLiked);
      setIsDisliked(response.data.post.isDisliked);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  function searchfun(e) {
    setQuery(e.target.value);
  }
  function rating(e) {
    setQuery(e.target.value);
  }
  

  return (
    <div>
      <Header />
      <div className="container1">
        <input
          onChange={searchfun}
          placeholder="                                         Search Blogs"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "500px",
            fontSize: "16px",
            marginLeft: "150px",
            marginTop: "20px",
          }}
        />

        <Grid container spacing={2}>
          {blogs &&
            blogs
              .filter(
                (e) =>
                  e.title.toLowerCase().includes(serQuery) ||
                  e.title.includes(serQuery)
              )
              .map((blog) => (
                <Grid item xs={6} key={blog._id}>
                  <MyCard
                    sx={{
                      width: "700px",
                      margin: "10px",
                      height: "400px",
                      alignItems: "center",
                      marginLeft: "150px",
                      marginTop: "50px",
                    }}
                  >
                    <Link to={"/Feedback/" + blog._id}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={`http://localhost:5000/${blog.image}`}
                        alt={blog.title}
                      />
                    </Link>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {blog.shortDescription }
                      </Typography>
                    </CardContent>
                    <center>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Box display={"flex"} alignItems={"center"}>
                          <IconButton
                            onClick={() => handleLikeButton(blog._id)}
                            style={{
                              color: blog.isLiked ? "blue" : "inherit",
                              transition: "color 0.5s ease",
                            }}
                          >
                            {blog.isLiked ? (
                              <ThumbUpIcon />
                            ) : (
                              <ThumbUpOffAltOutlinedIcon />
                            )}
                          </IconButton>

                          <Typography fontSize={20} fontWeight={800} ml={1}>
                            {blog.likes.length}
                          </Typography>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                          <Typography fontSize={20} fontWeight={800} ml={1}>
                            {blog.dislikes.length}
                          </Typography>
                          <IconButton
                            onClick={() => handleDislikeButton(blog._id)}
                            style={{
                              color: blog.isDisliked ? "red" : "inherit",
                              transition: "color 0.5s ease",
                            }}
                          >
                            {blog.isDisliked ? (
                              <ThumbDownIcon />
                            ) : (
                              <ThumbDownOutlinedIcon />
                            )}
                          </IconButton>
                        </Box>
                      </Box>
                    </center>
                  </MyCard>
                </Grid>
              ))}
        </Grid>
      </div>
    </div>
  );
};

export default AllBlogs;
