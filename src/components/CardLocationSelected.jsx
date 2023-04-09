import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const CardLocationSelected = ({ oggettoSelezionato }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let location = useLocation();
  return (
    <>
      <Container
        className={`pb-5 px-0  pt-3 mt-5 my-shadow w-sm-75 rounded-5  hover  cursor
          
              `}
        onClick={() => {
          location.pathname === "/" &&
            navigate(`/details/${JSON.stringify(oggettoSelezionato.coord)}`);
          dispatch({ type: "SET_ACTUAL_METEO", payload: oggettoSelezionato });
        }}
      >
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-around">
          <h2 className="text-center   m-0 fs-1">
            {oggettoSelezionato.name} ─{" "}
            <span>{`${new Date(
              oggettoSelezionato.dt * 1000
            ).getHours()}:${new Date(
              oggettoSelezionato.dt
            ).getMinutes()}`}</span>
          </h2>
        </div>
        <hr className="border-top border-4" />
        <Container>
          <p className="fs-8 text-center my-lineHeigth m-0">
            {Number(oggettoSelezionato?.main.temp).toFixed(0)}℃
          </p>
          <span className="d-block text-center my-2 fs-5">
            percepita: {Number(oggettoSelezionato.main.feels_like).toFixed(0)}℃
          </span>
          <div className="d-flex justify-content-center gap-5 mb-4 ">
            <span className=" fs-5">
              Massima:{Number(oggettoSelezionato?.main.temp_max).toFixed(0)}℃
            </span>
            <span className=" fs-5">
              Minima:{Number(oggettoSelezionato?.main.temp_min).toFixed(0)}℃
            </span>
          </div>

          <Row xs={1} md={2} className={`gy-4 `}>
            <Col>
              <div className=" text-center mini-box hover">
                <strong>Alba : </strong>
                <span>
                  {new Date(
                    oggettoSelezionato.sys.sunrise * 1000
                  ).toLocaleTimeString()}
                </span>
                <br />
                <strong>Tramonto : </strong>
                <span>
                  {new Date(
                    oggettoSelezionato.sys.sunset * 1000
                  ).toLocaleTimeString()}
                </span>
              </div>
            </Col>
            <Col>
              <div className=" text-center mini-box-tempo pt-4 hover">
                <img
                  src={`https://openweathermap.org/img/w/${oggettoSelezionato.weather[0].icon}.png`}
                  alt=""
                  width="35"
                  className="d-block mx-auto"
                />
                <strong className="">
                  {oggettoSelezionato.weather[0].main}
                </strong>
                <br className="m-0" />
                <span className="mt-5">
                  {oggettoSelezionato.weather[0].description}
                </span>
              </div>
            </Col>
            <Col>
              <div className=" text-center mini-box-tempo pt-4 hover">
                <div className="pt-2 mt-1">
                  <strong>humidity: </strong>
                  <span>{oggettoSelezionato.main.humidity}%</span>
                </div>

                <strong>pressure: </strong>
                <span className="mt-5">
                  {oggettoSelezionato.main.pressure} hPa
                </span>
                <br />
                <strong>visibility: </strong>
                <span className="mt-5">
                  {oggettoSelezionato.visibility} lux
                </span>
              </div>
            </Col>
            <Col>
              <div
                className={` text-center mini-box-tempo hover pt-4 ${
                  oggettoSelezionato.wind.gust ? "pb-4" : ""
                }`}
              >
                <div className={oggettoSelezionato.wind.gust ? "" : "mt-2"}>
                  <strong className="">wind </strong>
                </div>

                <strong>direction: </strong>
                <span className="mt-5">{oggettoSelezionato.wind.deg}°</span>
                <br />
                <strong>speed: </strong>
                <span className="mt-5">
                  {oggettoSelezionato.wind.speed} m/s
                </span>
                {oggettoSelezionato.wind.gust && (
                  <>
                    <br />
                    <strong>gust: </strong>
                    <span className="mt-5">
                      {oggettoSelezionato.wind.gust} m/s
                    </span>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default CardLocationSelected;
