import { useState, useEffect } from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { CartState } from "../context/Context";
import { Rating } from "./Rating";
import { AiFillDelete } from "react-icons/ai";
import { CgEnter } from "react-icons/cg";

export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="Home">
      <div className="productcontainer">
        <ListGroup>
          {cart.map((pro) => {
            return (
              <ListGroupItem key={pro.id}>
                <Row style={{color:"red",}}>
                  <Col md={2}><Image src={pro.Image} alt={pro.name} fluid rounded /></Col>
                  <Col md={2}>
                    <span>{pro.name}</span>
                  </Col>
                  <Col md={2}>
                    <span>$ {pro.price}</span>
                  </Col>
                  <Col md={2}>
                    <Rating rating={pro.rating}></Rating>
                  </Col>
                  <Col md={2}>
                    <Form.Control as="select" value={pro.qty}
                    onChange={(e)=>
                      dispatch({
                        type:"CHANGE_CART_QTY",
                        payload:{
                          id: pro.id,
                          qty: e.target.value,
                        },
                      })
                    }>
                      {[...Array(pro.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: pro })
                      }
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
      <div className="filetersummery">
        <span className="title">Subtotal({cart.length})</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ${total}</span>
        <Button>Proceed to checkout</Button>
      </div>
    </div>
  );
};
