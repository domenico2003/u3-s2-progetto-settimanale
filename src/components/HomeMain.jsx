import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomeMain = ({ meteoObj }) => {
  let [gradi, setGradi] = useState("");
  let [maxGradi, setMaxGradi] = useState("");
  let [minGradi, setMinGradi] = useState("");
  let [icon, setIcon] = useState("");

  useEffect(() => {
    setGradi(meteoObj.main.temp);
    setMaxGradi(meteoObj.main.temp_max);
    setMinGradi(meteoObj.main.temp_min);
    icons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meteoObj]);

  let icons = () => {
    switch (meteoObj.weather[0].description) {
      case "clear sky":
        setIcon(" bi bi-brightness-high-fill text-yellow");
        break;
      case "broken clouds":
        setIcon("bi bi-cloudy-fill text-grigio");
        break;
      case "few clouds":
        setIcon("bi bi-cloud text-grigio");
        break;
      default:
        setIcon("");
        break;
    }
  };
  return (
    <>
      {meteoObj && (
        <Container className="pb-5 px-0  pt-3 mt-5 my-shadow w-75 rounded-5">
          <h2 className="text-center m-0 fs-1">
            {meteoObj.name} ─{" "}
            <span>{`${new Date(meteoObj.dt * 1000).getHours()}:${new Date(
              meteoObj.dt
            ).getMinutes()}`}</span>
          </h2>
          <hr className="border-top border-4" />
          <p className="fs-8 text-center my-lineHeigth m-0">
            {Number(gradi).toFixed(0)}℃
          </p>
          <div className="d-flex justify-content-center gap-5 my-4 ">
            <span className=" fs-5">
              Massima:{Number(maxGradi).toFixed(0)}℃
            </span>
            <span className=" fs-5">Minima:{Number(minGradi).toFixed(0)}℃</span>
          </div>
          <Container>
            <Row>
              <Col xs={3}>
                <div className=" text-center mini-box">
                  <strong>Alba : </strong>
                  <span>
                    {new Date(meteoObj.sys.sunrise * 1000).toLocaleTimeString()}
                  </span>
                  <br />
                  <strong>Tramonto : </strong>
                  <span>
                    {new Date(meteoObj.sys.sunset * 1000).toLocaleTimeString()}
                  </span>
                </div>
              </Col>
              <Col xs={3}>
                <div className=" text-center mini-box pt-4">
                  <i className={`d-block ${icon}`}></i>
                  <strong>{meteoObj.weather[0].main}</strong>
                  <br />

                  <span>{meteoObj.weather[0].description}</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
};
export default HomeMain;
