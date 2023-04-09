import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SingleListGroup = ({ singlePref }) => {
  let [selectedName, setSelectedName] = useState(false);
  let dispatch = useDispatch();
  return (
    <ListGroup.Item
      className={`cursor hover ${selectedName ? "" : "active"}`}
      onClick={() => {
        !selectedName ? setSelectedName(true) : setSelectedName(false);
        dispatch({ type: "SELECT_OBJ", payload: singlePref });
      }}
    >
      {singlePref.name}
    </ListGroup.Item>
  );
};
export default SingleListGroup;
