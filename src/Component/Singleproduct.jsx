import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Rating } from "./Rating";
import { CartState } from "../context/Context";

export const Singleproduct = ({ pro }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Card
      className="card"
      style={{
        width: "18rem",
        height: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow:' 0px 2px 2px rgba(0, 0, 0, 0.61)'
      }}
    >
      <Card.Img
        variant="top"
        src={pro.image}
        style={{
          height: "150px",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title>{pro.name}</Card.Title>
        <Card.Text>{pro.description}</Card.Text>
        <Card.Subtitle style={{ padding: "4px", display: "flex", gap: "10px" }}>
          <span style={{ marginTop: "10px" }}>${pro.price}</span>

          <Rating rating={pro.rating} />
        </Card.Subtitle>
        
        <div style={{ color: "green", fontSize: "1rem" }}>
          {pro.fastDelivery ? "Fast Delivery" : "4 Day Delivery"}
        </div>

        {/* Check if item is already in cart */}
        {cart.some((p) => p.id === pro.id) ? (
          <Button
            style={{ textAlign: "center" }}
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_CART", payload: pro });
            }}
            variant="danger"
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: pro });
            }}
            variant="success"
            disabled={!pro.byStock} // ✅ Fixed disabled logic
          >
            {!pro.byStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
