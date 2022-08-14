import React from "react";
import AddStock from "./AddStock";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";

const Stock = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [addStock, setAddStock] = useState(false);

  const handleClick = () => {
    setData([...data, value]);
  };

  useEffect(() => {
    const dataDb = JSON.parse(localStorage.getItem("stock"));
    if (dataDb) {
      setData([...data, dataDb]);
    }
  }, []);
  console.log(data);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {data.map((item, idx) => (
        <Table striped bordered hover key={idx}>
          <thead>
            <tr>
              <th>#</th>
              <th>NamePro</th>
              <th>Qte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{idx + 1} </td>
              <td>{item.namePro} </td>
              <td>{item.qte} </td>
            </tr>
          </tbody>
        </Table>
      ))}
      stock
      <button onClick={() => setAddStock(true)}>addStock</button>
      {addStock && <AddStock />}
    </div>
  );
};

export default Stock;
