import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";

import { store } from "./store";

function App() {
  store.subscribe(() => console.log(store.getState()));
  store.dispatch({ type: "dataAdded" });

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
