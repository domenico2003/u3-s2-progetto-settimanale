import { useEffect, useState } from "react";

import Header from "./Header";
import HomeMain from "./HomeMain";

const Home = () => {
  let [milanoMeteo, setMilanoMeteo] = useState(null);
  let [milanoGradi, setMilanoGradi] = useState(null);
  let [romaMeteo, setRomaMeteo] = useState(null);
  let [romaGradi, setRomaGradi] = useState(null);
  let [napoliMeteo, setNapoliMeteo] = useState(null);
  let [napoliGradi, setNapoliGradi] = useState(null);
  let [query, setQuery] = useState("");
  let [queryMeteo, setQueryMeteo] = useState(null);
  let [queryGradi, setQueryGradi] = useState(null);

  useEffect(() => {
    meteoFetc(45.4642, 9.1896, setMilanoMeteo, setMilanoGradi);
    meteoFetc(41.8933, 12.4829, setRomaMeteo, setRomaGradi);
    meteoFetc(40.8359, 14.2488, setNapoliMeteo, setNapoliGradi);
  }, [queryMeteo]);

  const meteoFetc = async (latitudine, longitudine, setState, setGradi) => {
    let risposta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitudine}&lon=${longitudine}&units=metric&appid=d9a758ed2e02f0cca673b9510c99e761`
    );
    let dato = await risposta.json();
    setState(dato);
    setGradi(dato.main.temp);
  };

  return (
    <>
      <Header
        napoliGradi={napoliGradi}
        napoliMeteo={napoliMeteo}
        romaGradi={romaGradi}
        romaMeteo={romaMeteo}
        milanoGradi={milanoGradi}
        milanoMeteo={milanoMeteo}
        query={query}
        setQuery={setQuery}
        meteoFetc={meteoFetc}
        setQueryGradi={setQueryGradi}
        setQueryMeteo={setQueryMeteo}
        queryGradi={queryGradi}
        queryMeteo={queryMeteo}
      />
      {queryMeteo && <HomeMain meteoObj={queryMeteo} />}
      {milanoMeteo && <HomeMain meteoObj={milanoMeteo} />}
      {romaMeteo && <HomeMain meteoObj={romaMeteo} />}
      {napoliMeteo && <HomeMain meteoObj={napoliMeteo} />}
    </>
  );
};

export default Home;
