import {
  Form,
  Button,
  Dropdown,
  DropdownButton,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addStock, handleChange } from "../store/stockSlice";

const AddStock = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <h1>form add stock</h1>

      <div>
        <Form
          onSubmit={() => {
            dispatch(addStock());
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ADD PRODUCT IN STOCK</Form.Label>
            <Form.Control
              type="string"
              name="namePro"
              value={state.namePro}
              placeholder="addStock..."
              onChange={(e) => {
                dispatch(handleChange(e));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ADD QTE </Form.Label>
            <Form.Control
              type="string"
              name="qte"
              value={state.qte}
              placeholder="Qte..."
              onChange={(e) => {
                dispatch(handleChange(e));
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddStock;
