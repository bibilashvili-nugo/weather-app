import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/random" element={<p>Random</p>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
