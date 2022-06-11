import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const List: React.FC = () => {
  const dispach = useDispatch();
  const selector = useTypedSelector((state) => state.images.items);
  console.log("selector", selector);
  useEffect(() => {
    const getCats = async () => {
      const res = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10&page=0&category_ids=3"
      );
      const data = await res.json();
      dispach({ type: "GET_ITEMS", payload: data });
    };
    getCats();
    console.log("heloooooooooo");
  }, []);

  const handleLoadMore = async () => {
    const fet = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&page=0&category_ids=3"
    );
    const data = await fet.json();
    dispach({ type: "LOAD_MORE", payload: data });
  };
  return (
    <Container>
      <Row>
        {selector.map((item: any) => (
          <Col xs={12} lg={3} style={{ margin: "15px" }}>
            <Card key={item.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.url}
                alt="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Col>
        ))}

        <Button
          onClick={handleLoadMore}
          size="small"
          style={{ margin: "20px" }}
        >
          Load more...
        </Button>
      </Row>
    </Container>
  );
};

export default React.memo(List);
