import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import FeedbackItem from "./FeedbackItem";
import BlogNavbar from "./BlogNavbar";
const styles = {
  root: {
    flexGrow: 1,
    padding: "16px",
  },
  title: {
    marginBottom: "16px",
  },
  feedbacksContainer: {
    marginTop: "16px",
  },
  alert: {
    marginTop: "16px",
  },
};

const BlogFeedbacks = () => {
  const { id } = useParams();
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8060/Blog/getFeedback/${id}`
        );
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeedbacks();
  }, [id]);

  return (
    
    <div style={styles.root}>
      {/* <BlogNavbar /> */}
      <Typography variant="h4" component="h1" style={styles.title}>
        Feedbacks
      </Typography>
      {isLoading && <CircularProgress />}
      {!isLoading && error && (
        <Alert severity="error" style={styles.alert}>
          {error}
        </Alert>
      )}
      {!isLoading && !error && feedbacks.length === 0 && (
        <Alert severity="info" style={styles.alert}>
          No feedbacks available
        </Alert>
      )}
      {!isLoading && !error && feedbacks.length > 0 && (
        <Grid container spacing={2} style={styles.feedbacksContainer}>
          {feedbacks.map((feedback) => (
            <Grid item xs={12} key={feedback._id}>
              <FeedbackItem feedback={feedback} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default BlogFeedbacks;
