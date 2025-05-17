// ROUTER
import { Route, Routes } from "react-router-dom";

// PAGE
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";


function App() {
  return (
    <main>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
      </Routes>
    </main>
  );
}

export default App;
