// ROUTER
import { Route, Routes } from "react-router-dom";

// PAGE
import HomePage from "./page/HomePage";
import BerandaPage from "./page/BerandaPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import LearingPath from "./page/LearingPage";
import QuizPath from "./page/QuizPage";
import QuizResult from "./page/ResultPage"
import ProfilePage from "./page/ProfilePage";
import TabiRankingsPage from "./page/RankingPage";


function App() {
  return (
    <main>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/beranda"} element={<BerandaPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/learn"} element={<LearingPath />} />
        <Route path={"/rankings"} element={<TabiRankingsPage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/quiz/:id"} element={<QuizPath />} />
        <Route path={"/quiz-results"} element={<QuizResult />} />
      </Routes>
    </main>
  );
}

export default App;
