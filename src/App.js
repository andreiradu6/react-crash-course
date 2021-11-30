import React from "react";
import FavoriteMeetupsPage from "./Pages/Favorites";
import AllMeetupsPage from "./Pages/AllMeetups";
import NewMeetupsPage from "./Pages/NewMeetup";
import { Routes, Route } from "react-router-dom";
import Layout from './Components/layout/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllMeetupsPage />} />
        <Route path="/favorites" exact element={<FavoriteMeetupsPage />} />
        <Route path="/new-meetup" exact element={<NewMeetupsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
