import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Rating } from "./Rating";
import "./style.css";
import { CartState } from "../context/Context";

export const Filter = () => {
  const {
    pdispatch, pstate:{ byStock, byFastDelivary, byRating, sort, }} = CartState();
  
  return (
    <div className="filter">
      <span className="title">Filter Product</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type={"radio"}
          id={`inline-1`}
          onChange={() => pdispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })}
          checked={sort === "lowToHigh" ? true: false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Decending"
          name="group1"
          type={"radio"}
          id={`inline-2`}
          onChange={() =>
            pdispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
          }
          checked={sort === "highToLow"?true:false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={()=>
            pdispatch({type:"FILTER_BY_STOCK",})
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type={"checkbox"}
          id={`inline-4`}
          onChange={()=>
            pdispatch({
              type:"FILTER_BY_DELIVERY"
            })
          }
          checked={byFastDelivary}
        />
      </span>
      <span></span>
      <span>
        <label style={{ paddingleft: 15 }}>Rating :</label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            pdispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <span>
        <Button  variant="primary" className="p"
        onClick={()=>
          pdispatch({
            type:"CLEAR",
          })
        }>
          Clear the filter
        </Button>
      </span>
    </div>
  );
};
export default Filter;