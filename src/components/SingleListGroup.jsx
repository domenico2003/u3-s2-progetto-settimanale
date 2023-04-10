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
        selectedName
          ? dispatch({ type: "SELECT_OBJ", payload: null })
          : dispatch({ type: "SELECT_OBJ", payload: singlePref });
      }}
      key={singlePref.id}
    >
      {singlePref.name}
    </ListGroup.Item>
  );
};
export default SingleListGroup;
