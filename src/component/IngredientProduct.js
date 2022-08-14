import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import {
  Form,
  Button,
  Dropdown,
  DropdownButton,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  submitAddProduct,
  handleAdd,
  handleChange,
  handleChangeInputProduct,
  handleDelete,
  handleClearProduct,
} from "../store/productSlice";

const IngredientProduct = () => {
  // redux dispatch
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { plus } = useSelector((state) => state.product);
  const { addProduct } = useSelector((state) => state.product);
  const { boolean } = useSelector((state) => state.product);
  const { addProperty } = useSelector((state) => state.product);

  return (
    <div className="App">
      <h1>ingredient</h1>
      <Form.Control
        type="string"
        placeholder="Add product..."
        name="addProduct"
        value={addProduct}
        onChange={(e) => {
          dispatch(handleChange(e));
        }}
      />
      <Button
        variant="warning"
        type="button"
        name="addProduct"
        onClick={() => dispatch(handleAdd("addProduct"))}
      >
        Add name product
      </Button>

      {plus && (
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="string"
            placeholder="Add property..."
            name="addProperty"
            value={addProperty}
            onChange={(e) => dispatch(handleChange(e))}
          />

          <Button
            variant="warning"
            type="button"
            name="addProperty"
            onClick={() => dispatch(handleAdd("addProperty"))}
          >
            Add property
          </Button>
        </Form.Group>
      )}
      <div>
        {!plus && (
          <>
            add
            <Button
              variant="warning"
              type="button"
              name="plus"
              onClick={() => dispatch(handleAdd("plus"))}
            >
              +
            </Button>
          </>
        )}
      </div>
      <div
        style={{
          display: " flex",
          flexDirection: "row",
          textAlign: "center",
          border: "1px solid",
          width: "300px",
          marginLeft: "5px",
        }}
        className="App"
      >
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(submitAddProduct());
          }}
        >
          {boolean && <h3 className="m-5">{addProduct} </h3>}
          {product.map((product, idx) => (
            <div key={idx} style={{ display: " flex", flexDirection: "row " }}>
              <Form.Label>{product.name} </Form.Label>
              <Form.Group
                className="input-group mb-5  "
                controlId="formBasicEmail"
              >
                <Form.Control
                  className=" d-inline"
                  type="string"
                  name={product.name}
                  onChange={(e) => dispatch(handleChangeInputProduct(e))}
                  style={{ width: "70px" }}
                />
              </Form.Group>
              <div>
                <Form.Group
                  className="mb-2 d-inline-flex "
                  controlId="formBasicPassword"
                >
                  <Button
                    name={product.name}
                    variant="danger"
                    type="button"
                    onClick={(e) => dispatch(handleDelete(e))}
                  >
                    delete
                  </Button>
                </Form.Group>
              </div>
            </div>
          ))}
          <Button variant="primary" type="submit">
            Add Product to db
          </Button>
        </Form>
      </div>
      <div>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch(handleClearProduct())}
        >
          clear ProductDb
        </Button>
      </div>
    </div>
  );
};

export default IngredientProduct;
