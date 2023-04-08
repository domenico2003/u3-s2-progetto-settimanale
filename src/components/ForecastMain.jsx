import { Col, Row } from "react-bootstrap";
import HomeMain from "./HomeMain";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ForecastMain = ({ meteo }) => {
  let meteoOdierno = useSelector((state) => state.actualMeteo.content);
  let [previsioniArr, setPrevisioniArr] = useState([]);

  useEffect(() => {
    if (meteo) {
      setPrevisioniArr(meteo.list);
      console.log(previsioniArr);
    }
  }, [meteo]);

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={10}>
          {meteoOdierno && <HomeMain meteoObj={meteoOdierno} />}
        </Col>
        <Col xs={10}></Col>
      </Row>
    </>
  );
};
export default ForecastMain;
