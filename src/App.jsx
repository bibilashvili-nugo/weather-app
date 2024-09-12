// import Language_selector from "./language_selector/Language_selector";
// import { useTranslation } from "react-i18next";
import "./i18n";
import LeftSide from "./pageLeftSide/LeftSide";

const App = () => {
  // const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundImage:
          "url('/weatherBackGrounds/d8e9712b61aba22c5ca6dac8c7336dcb.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Language_selector /> */}
      <LeftSide />
    </div>
  );
};

export default App;
