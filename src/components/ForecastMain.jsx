import { Col, Container, Row } from "react-bootstrap";
import HomeMain from "./HomeMain";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CardDetails from "./CardDetails";

const ForecastMain = ({ meteo }) => {
  let meteoOdierno = useSelector((state) => state.actualMeteo.content);
  let [previsioniArr, setPrevisioniArr] = useState([]);
  let [valueInput, setValueInput] = useState(0);

  useEffect(() => {
    if (meteo) {
      setPrevisioniArr(meteo.list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meteo]);

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={10}>
          <h2 className="text-center">ecco il tempo oggi!</h2>
          {meteoOdierno && <HomeMain meteoObj={meteoOdierno} />}
        </Col>
        <Col xs={8}>
          <Container>
            <h2 className="text-center my-5">
              vedi le previsioni per i prossimi giorni
            </h2>
            {previsioniArr !== "undefined " && (
              <CardDetails dataPrev={previsioniArr[valueInput]} />
            )}
            <input
              type="range"
              className="form-range  "
              min="0"
              max="39"
              step="1"
              value={valueInput}
              onChange={(e) => {
                setValueInput(e.target.value);
              }}
            />
            {previsioniArr !== "undefined" && (
              <div className="d-flex justify-content-between">
                <h5 className="text-center">
                  DA: {new Date(1000 * previsioniArr[0]?.dt).toDateString()}
                </h5>
                <h5 className="text-center">
                  {new Date(
                    1000 * previsioniArr[valueInput]?.dt
                  ).toDateString()}{" "}
                  ─{" "}
                  {new Date(
                    1000 * previsioniArr[valueInput]?.dt
                  ).toLocaleTimeString("it-IT")}
                </h5>
                <h5 className="text-center">
                  A: {new Date(1000 * previsioniArr[39]?.dt).toDateString()}
                </h5>
              </div>
            )}
          </Container>
        </Col>
      </Row>
    </>
  );
};
export default ForecastMain;
