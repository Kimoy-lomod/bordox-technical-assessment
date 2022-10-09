import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";

import fakeData from "./fakeData.json";

function App() {
  const dispatch = useDispatch();
  const models = useSelector((state) => state.models);

  useEffect(() => {
    if (models.length === 0) {
      fakeData.map(({ id, title, description }) =>
        dispatch({
          type: "LOAD",
          payload: {
            id,
            title,
            description,
          },
        })
      );
    }
  }, [dispatch, models]);

  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
}

export default App;
