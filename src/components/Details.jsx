import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ForecastMain from "./ForecastMain";

const Details = () => {
  let [coordinate, setCoordinate] = useState(null);
  let [forecastMeteo, setForecastMeteo] = useState(null);
  let params = useParams();

  useEffect(() => {
    setCoordinate(JSON.parse(params.coordinate));
    console.log(coordinate);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (coordinate) {
      meteoForecastFetc();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinate]);

  const meteoForecastFetc = async () => {
    let risposta = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinate.lat}&lon=${coordinate.lon}&appid=d9a758ed2e02f0cca673b9510c99e761`
    );
    let dato = await risposta.json();
    setForecastMeteo(dato);
    console.log(forecastMeteo);
  };
  return (
    <>
      {forecastMeteo && (
        <Container>
          <h1 className="text-center my-5 fs-8">{forecastMeteo.city.name}</h1>
          <ForecastMain meteo={forecastMeteo} />
        </Container>
      )}
    </>
  );
};

export default Details;
