import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const HomeMain = ({ meteoObj, setPreferiti }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let location = useLocation();
  let [gradi, setGradi] = useState("");
  let [maxGradi, setMaxGradi] = useState("");
  let [minGradi, setMinGradi] = useState("");
  let [starSelected, setStarSelected] = useState(false);
  let [totalPrefer, setTotalPrefer] = useState([]);
  let preferiti = useSelector((state) => state.preferiti.content);
  useEffect(() => {
    setGradi(meteoObj.main.temp);
    setMaxGradi(meteoObj.main.temp_max);
    setMinGradi(meteoObj.main.temp_min);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meteoObj]);

  useEffect(() => {
    preferiti.forEach((element) => {
      if (element.id === meteoObj.id) {
        console.log(element.id === meteoObj.id, meteoObj.id, element.id);
        setStarSelected(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "preferiti",

      JSON.stringify(preferiti)
    );
    Preferiti();
  }, [starSelected]);
  const Preferiti = () => {
    let risp = JSON.parse(window.localStorage.getItem("preferiti"));
    setTotalPrefer(risp);
  };

  useEffect(() => {
    console.log(JSON.parse(window.localStorage.getItem("preferiti")));
  });

  return (
    <>
      {meteoObj && (
        <Container
          className={`pb-5 px-0  pt-3 mt-5 my-shadow w-75 rounded-5  hover 
          
              `}
        >
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-around">
            <h2 className="text-center flex-fill ms-md-6  m-0 fs-1">
              {location.pathname === "/" && `${meteoObj.name} ─${" "}`}
              <span>{`${new Date(meteoObj.dt * 1000).getHours()}:${new Date(
                meteoObj.dt
              ).getMinutes()}`}</span>
            </h2>
            <Button
              className="me-md-5 mt-3 mt-md-0 bg-alert border-0 fs-4 text-yellow"
              onClick={() => {
                starSelected ? setStarSelected(false) : setStarSelected(true);
                starSelected
                  ? dispatch({ type: "REMOVE_PREFERITI", payload: meteoObj })
                  : dispatch({ type: "SET_PREFERITI", payload: meteoObj });
              }}
            >
              {starSelected ? (
                <i className="bi bi-star-fill"></i>
              ) : (
                <i className="bi bi-star"></i>
              )}
            </Button>
          </div>
          <hr className="border-top border-4" />
          <Container
            className={`${location.pathname === "/" && "cursor"}`}
            onClick={() => {
              location.pathname === "/" &&
                navigate(`/details/${JSON.stringify(meteoObj.coord)}`);
              dispatch({ type: "SET_ACTUAL_METEO", payload: meteoObj });
            }}
          >
            <p className="fs-8 text-center my-lineHeigth m-0">
              {Number(gradi).toFixed(0)}℃
            </p>
            <span className="d-block text-center my-2 fs-5">
              percepita: {Number(meteoObj.main.feels_like).toFixed(0)}℃
            </span>
            <div className="d-flex justify-content-center gap-5 mb-4 ">
              <span className=" fs-5">
                Massima:{Number(maxGradi).toFixed(0)}℃
              </span>
              <span className=" fs-5">
                Minima:{Number(minGradi).toFixed(0)}℃
              </span>
            </div>

            <Row
              xs={1}
              md={2}
              xl={location.pathname === "/" && 4}
              className={`gy-4 ${location.pathname === "/" && "gy-xl-0"}`}
            >
              <Col>
                <div className=" text-center mini-box hover">
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
              <Col>
                <div className=" text-center mini-box-tempo pt-4 hover">
                  <img
                    src={`https://openweathermap.org/img/w/${meteoObj.weather[0].icon}.png`}
                    alt=""
                    width="35"
                    className="d-block mx-auto"
                  />
                  <strong className="">{meteoObj.weather[0].main}</strong>
                  <br className="m-0" />
                  <span className="mt-5">
                    {meteoObj.weather[0].description}
                  </span>
                </div>
              </Col>
              <Col>
                <div className=" text-center mini-box-tempo pt-4 hover">
                  <div className="pt-2 mt-1">
                    <strong>humidity: </strong>
                    <span>{meteoObj.main.humidity}%</span>
                  </div>

                  <strong>pressure: </strong>
                  <span className="mt-5">{meteoObj.main.pressure} hPa</span>
                  <br />
                  <strong>visibility: </strong>
                  <span className="mt-5">{meteoObj.visibility} lux</span>
                </div>
              </Col>
              <Col>
                <div
                  className={` text-center mini-box-tempo hover pt-4 ${
                    meteoObj.wind.gust ? "pb-4" : ""
                  }`}
                >
                  <div className={meteoObj.wind.gust ? "" : "mt-2"}>
                    <strong className="">wind </strong>
                  </div>

                  <strong>direction: </strong>
                  <span className="mt-5">{meteoObj.wind.deg}°</span>
                  <br />
                  <strong>speed: </strong>
                  <span className="mt-5">{meteoObj.wind.speed} m/s</span>
                  {meteoObj.wind.gust && (
                    <>
                      <br />
                      <strong>gust: </strong>
                      <span className="mt-5">{meteoObj.wind.gust} m/s</span>
                    </>
                  )}
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
