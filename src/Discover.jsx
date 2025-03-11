import React from "react";
import "./Discover.css";
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VideoFeatures from "./assets/cybertruck-features.mp4"

const Discover = () => {
  const navigate = useNavigate();

  return (
    <>
    <section className="top-cont">
    <Container maxWidth="md" className="discover-container">
      <Typography variant="h3" className="discover-title">
        DISCOVER 
      </Typography>
      <Typography variant="subtitle1" className="discover-subtitle">
        Explore the details of our premium collection, crafted with innovation and performance.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {[
          {
            name: "Tesla Cybertruck",
            img: "https://wallpapers.com/images/hd/tesla-cybertruck-m829kw36tvhlo9kv.jpg",
            desc: "An electric beast built with an ultra-hard exoskeleton for toughness.",
          },
          {
            name: "Tesla Model S Plaid",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AGWoC7FNDjUHg37nrTUAnzLgjbE4j7EPcw&s",
            desc: "Fastest production car with an all-wheel drive and stunning speed.",
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card className="discover-card">
              <CardMedia component="img" image={item.img} alt={item.name} className="discover-image" />
              <CardContent className="discover-content">
                <Typography variant="h5" className="discover-name">
                  {item.name}
                </Typography>
                <Typography variant="body2" className="discover-description">
                  {item.desc}
                </Typography>
                <Button className="discover-btn" onClick={() => navigate("/")}>
                  Back to Explore
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </section>
    <section className="video-img">
    <div className="vid-cont">
      <h2>Watch this Video</h2>
      <video width="600" controls>
        <source src= {VideoFeatures} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    </section>
    </>
  );
};

export default Discover;
