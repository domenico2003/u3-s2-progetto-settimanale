import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = ({
  milanoMeteo,
  milanoGradi,
  romaMeteo,
  romaGradi,
  napoliMeteo,
  napoliGradi,
  setQuery,
  query,
  meteoFetc,
  setQueryGradi,
  setQueryMeteo,
  queryGradi,
  queryMeteo,
}) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [localita, setLocalita] = useState(null);

  let handleSubmit = async (e) => {
    e.preventDefault();

    let risposta = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=d9a758ed2e02f0cca673b9510c99e761`
    );
    let dato = await risposta.json();

    setLocalita(dato[0]);
  };

  useEffect(() => {
    if (localita) {
      meteoFetc(localita.lat, localita.lon, setQueryMeteo, setQueryGradi);
      console.log(localita);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localita]);

  let handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="bg-header">
      <Container>
        <div className="w-25 pt-5 mx-auto d-flex justify-content-center pb-3">
          {queryMeteo && (
            <span
              onClick={() => {
                navigate(`/details/${JSON.stringify(queryMeteo.coord)}`);
                dispatch({ type: "SET_ACTUAL_METEO", payload: queryMeteo });
              }}
              className="btn btn-home-info px-5 rounded-5 hover button-shadow"
            >
              {localita?.name} {queryGradi.toFixed(0)} ℃
            </span>
          )}
        </div>
        <Form className=" pb-5 w-75 mx-auto rounded-5" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="inserisci  la tua locaità e premi il tasto invio "
            className="rounded-5"
            onChange={handleChange}
          />
        </Form>

        <div className="w-75 mx-auto flex-column flex-md-row d-flex gap-3 justify-content-around pb-5 align-items-center">
          {milanoMeteo && (
            <span
              onClick={() => {
                navigate(`/details/${JSON.stringify(milanoMeteo.coord)}`);
                dispatch({ type: "SET_ACTUAL_METEO", payload: milanoMeteo });
              }}
              className="btn btn-home-info px-5 hover rounded-5 button-shadow"
            >
              Milano {milanoGradi.toFixed(0)} ℃
            </span>
          )}
          {romaMeteo && (
            <span
              onClick={() => {
                navigate(`/details/${JSON.stringify(romaMeteo.coord)}`);
                dispatch({ type: "SET_ACTUAL_METEO", payload: romaMeteo });
              }}
              className="btn btn-home-info px-5 hover rounded-5 button-shadow"
            >
              Roma {romaGradi.toFixed(0)} ℃
            </span>
          )}
          {napoliMeteo && (
            <span
              onClick={() => {
                navigate(`/details/${JSON.stringify(napoliMeteo.coord)}`);
                dispatch({ type: "SET_ACTUAL_METEO", payload: napoliMeteo });
              }}
              className="btn btn-home-info px-5 hover rounded-5 button-shadow"
            >
              Napoli {napoliGradi.toFixed(0)} ℃
            </span>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
