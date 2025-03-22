import React from "react";
import {Container, FormControl, Navbar, InputGroup, Dropdown, Badge, Button,} from "react-bootstrap";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

export const Herder = ({ pro }) => {
  const {
    state: { cart },
    dispatch,
    pdispatch
  } = CartState();
  return (
    <Navbar  bg="dark" variant="dark" style={{ height: 80 ,position:"relative"}}>
      <Container>
        {/* Header Logo */}
        <Navbar.Brand>
          <Link
            to="/home"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Shopping Cart
          </Link>
        </Navbar.Brand>

        {/* Search Bar */}
        <Navbar.Text className="search">
          <InputGroup>
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a product "
              onChange={(e)=>{pdispatch({type:"FILTER_BY_SEARCH", payload:e.target.value, })}  }
            />
          </InputGroup>
        </Navbar.Text>
        {/* cart */}   
        <Dropdown align="end">
  <Dropdown.Toggle variant="success">
    <HiMiniShoppingCart />
    <Badge bg="transparent">{cart.length}</Badge>
  </Dropdown.Toggle>

  <Dropdown.Menu className="cart-dropdown" style={{width:"600px", marginRight:"30px"}}>
    <div className="meger" >
    {cart.length > 0 ? (
      <>
     {cart.map((pro) => (
        <div className="cartItem" key={pro.id} style={{ display: "flex", alignItems: "center", padding: "30px",marginLeft:"50px" }}>
          <img src={pro.image} alt={pro.name}/>
          <div style={{marginRight:"150px", display:"flex",flexDirection:"column"}}>
            <span>{pro.name}</span>
            <span className="price" >${pro.price}</span>
          </div>
          <AiFillDelete
          fontSize="20px"
          style={{cursor:"pointer"}}
          onClick={()=>
            dispatch({ type: "REMOVE_FROM_CART", payload: pro })
          }/>
        </div>
      ))}
      <Link to="/cart">
                  <Button variant="primary" style={{ width: "100%", marginTop: "10px" }}>
                    Go to Cart
                  </Button>
                </Link>
                </>
    ):(
      <span style={{ padding: "10px", display: "block", textAlign: "center", color: "red" }}>Empty Cart!</span>
    )}</div>
  </Dropdown.Menu>
</Dropdown>
      </Container>
    </Navbar>
  );
};