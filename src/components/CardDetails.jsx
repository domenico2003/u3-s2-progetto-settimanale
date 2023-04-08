import { Col, Container, Row } from "react-bootstrap";

const CardDetails = ({ dataPrev }) => {
  console.log(dataPrev);
  return (
    <>
      <div className="pb-5 px-0  pt-3 my-5 mx-auto my-shadow w-75 rounded-5  hover">
        <h2 className="text-center m-0 ">
          {new Date(1000 * dataPrev?.dt).toDateString()} ─{" "}
          {new Date(1000 * dataPrev?.dt).toLocaleTimeString("it-IT")}
        </h2>
        <hr className="border-top border-4" />
        <p className="fs-8 text-center my-lineHeigth m-0">
          {Number(dataPrev.main.temp).toFixed(0)}℃
        </p>
        <span className="d-block text-center my-2 fs-5">
          percepita: {Number(dataPrev.main.feels_like).toFixed(0)}℃
        </span>
        <div className="d-flex justify-content-center gap-5 mb-4 ">
          <span className=" fs-5">
            Massima:{Number(dataPrev.main.temp_max).toFixed(0)}℃
          </span>
          <span className=" fs-5">
            Minima:{Number(dataPrev.main.temp_min).toFixed(0)}℃
          </span>
        </div>

        <Container>
          <Row xs={1} md={2} className="gy-4 ">
            <Col>
              <div className=" text-center mini-box hover">
                <strong>Alba : </strong>
                <span>
                  {new Date(dataPrev.sys.sunrise * 1000).toLocaleTimeString()}
                </span>
                <br />
                <strong>Tramonto : </strong>
                <span>
                  {new Date(dataPrev.sys.sunset * 1000).toLocaleTimeString()}
                </span>
              </div>
            </Col>
            <Col>
              <div className=" text-center mini-box-tempo pt-4 hover">
                <img
                  src={`https://openweathermap.org/img/w/${dataPrev.weather[0].icon}.png`}
                  alt=""
                  width="35"
                  className="d-block mx-auto"
                />
                <strong className="">{dataPrev.weather[0].main}</strong>
                <br className="m-0" />
                <span className="mt-5">{dataPrev.weather[0].description}</span>
              </div>
            </Col>
            <Col>
              <div className=" text-center mini-box-tempo pt-4 hover">
                <div className="pt-2 mt-1">
                  <strong>humidity: </strong>
                  <span>{dataPrev.main.humidity}%</span>
                </div>

                <strong>pressure: </strong>
                <span className="mt-5">{dataPrev.main.pressure} hPa</span>
                <br />
                <strong>visibility: </strong>
                <span className="mt-5">{dataPrev.visibility} lux</span>
              </div>
            </Col>
            <Col>
              <div
                className={` text-center mini-box-tempo hover pt-4 ${
                  dataPrev.wind.gust ? "pb-4" : ""
                }`}
              >
                <div className={dataPrev.wind.gust ? "" : "mt-2"}>
                  <strong className="">wind </strong>
                </div>

                <strong>direction: </strong>
                <span className="mt-5">{dataPrev.wind.deg}°</span>
                <br />
                <strong>speed: </strong>
                <span className="mt-5">{dataPrev.wind.speed} m/s</span>
                {dataPrev.wind.gust && (
                  <>
                    <br />
                    <strong>gust: </strong>
                    <span className="mt-5">{dataPrev.wind.gust} m/s</span>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CardDetails;
